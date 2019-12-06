<template>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-10">
                            <label for="input">Question Name</label><br>
                            <div class="form-group">
                                <input class="form-control" v-bind:id="indexOfQuestions" type="text" :ref="0"
                                       placeholder="Type your question"
                                       v-model="question" v-on:input="check">
                            </div>
                            <div class="panel panel-warning">
                                <div class="panel-heading">
                                    Answers
                                </div>
                                <div class="panel-body">
                                    <div v-for='index in countOfAnswers' :key='index' id="d">
                                        <createAnswer :count="countOfAnswers"
                                                      :countOfQuestion="countOfQuestion"
                                                      v-on:input='counter'
                                                      :arrayOfQuestions='arrayOfQuestions'
                                                      :index="index"
                                                      :idOfQuestion="id"
                                                      v-on:check="isCorrect"/>
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
            indexOfQuestions: Number,
            arrayOfQuestions: Array,
        },
        data() {
            return {
                countOfAnswers: 0,
                question: '',
                answer: '',
                checkbox: false,
                id: 0
            }
        },
        methods: {
            counter(answer) {
                this.$emit('answer', answer);
            },
            check() {

                this.id = parseInt(this.$refs[0].id);
                this.arrayOfQuestions[this.id - 1].name = '';
                this.arrayOfQuestions[this.id - 1].name += this.question;
                // this.$emit('input1', this.question);
                console.log(this.arrayOfQuestions);
            },
            addComponent() {
                if (this.countOfAnswers === 0) {
                    this.$http.post('http://localhost/ajaxfile.php', {
                        request: 3,
                        question: this.question,
                    }, {emulateJSON: true}).then(() => {

                    });
                }
                this.id = parseInt(this.$refs[0].id);
                this.arrayOfQuestions[this.id-1].answers.push({});

                this.arrayOfQuestions[this.id - 1].answers[this.countOfAnswers].name = '';

                this.arrayOfQuestions[this.id - 1].answers[this.countOfAnswers].isTrue = false;

                this.countOfAnswers = this.countOfAnswers + 1;
                this.insertdata();

            },
            insertdata() {
                if (this.countOfAnswers > 1) {
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
    .col-md-2 {
        margin-right: 20px;
    }
</style>