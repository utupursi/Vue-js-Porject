<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-10">
                            <label for="input">Question Name</label><br>
                            <div class="form-group">
                                <input class="form-control" v-bind:id="index" type="text" :ref="count" placeholder="Type your question"
                                       v-model="question" v-on:input="check">
                            </div>
                            <div class="panel panel-warning">
                                <div class="panel-heading">
                                    Answers
                                </div>
                                <div class="panel-body">
                                    <div v-for='index in count' :key='index' id="d">
                                        <createAnswer :count="count" v-on:input='counter' :arrayOfAnswers="arrayOfAnswers"  :arrayOfQuestions='arrayOfQuestions' :index="index"  v-on:check="isCorrect"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2" style="padding-top: 24px">
                            <button id='myid' class="btn btn-success" v-on:click='addComponent'>+ Add Answer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import createAnswer from './createAnswer'

    export default {
        name: 'createQuestion',
        components: {
            createAnswer
        },
        props: {
            countOfQuestion: Number,
            index: Number,
            arrayOfQuestions: Array,
        },
        data() {
            return {
                count: 0,
                question: '',
                answer: '',
                checkbox: false,
                arrayOfAnswers:[]
            }
        },
        methods: {
            counter(answer) {
                console.log(answer);
                this.$emit('answer', answer);
            },
            check() {

                let id = this.$refs[0].id;
                this.arrayOfQuestions[id - 1] = '';
                this.arrayOfQuestions[id - 1]+= this.question;
                // this.$emit('input1', this.question);
                console.log(this.arrayOfQuestions);
            },
            addComponent() {
                if (this.count === 0) {
                    this.$http.post('http://localhost/ajaxfile.php', {
                        request: 3,
                        question: this.question,
                    }, {emulateJSON: true}).then(() => {

                    });
                }
                this.count = this.count + 1;
                this.arrayOfAnswers.push('');
                this.insertdata();

            },
            insertdata() {
                if (this.count > 1) {
                    this.$http.post('http://localhost/ajaxfile.php', {
                        request: 4,
                        answer: this.answer,
                        isCorrect: this.checkbox
                    }, {emulateJSON: true}).then(() => {

                    });
                }
                this.checkbox = false;
            },
            isCorrect(correct) {
                console.log(correct);
                this.checkbox = correct;

            }
        },


    }
</script>

<style scoped>
    /*#d {*/

    /*}*/

    /*#container {*/
    /*    width: 530px;*/
    /*    margin-left: 40px;*/
    /*    background-color: #f4f4f4;*/
    /*}*/

    /*.form-control {*/
    /*    width: 400px;*/
    /*    margin-left: 75px;*/

    /*}*/
    .col-md-2{
        margin-right:20px;
    }
</style>