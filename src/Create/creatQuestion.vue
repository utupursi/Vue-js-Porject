<template>
    <div class="row" :ref="1">
        <div class="col-md-12">
            <div class="col-md-2 pull-right" id="x">
                <button class="btn btn-danger" @click="deleteQuestion" ><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-10">
                            <label for="input">Question Name</label><br>
                            <div class="form-group">
                                <input class="form-control" v-bind:id="indexOfQuestions-1" type="text" :ref="0"
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
                                                      :idOfQuestion="idOfQuestion"
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
                id: 0,
                idOfQuestion:0
            }
        },
        methods: {
            counter(answer) {
                this.$emit('answer', answer);
            },
            check() {
                this.$emit('questionInput', this.question);
                this.id = parseInt(this.$refs[0].id);
                this.arrayOfQuestions.forEach(question => {
                    if (question.id === this.id) {
                        question.name = '';
                        question.name += this.question;
                    }
                });
            },
            addComponent() {
                // if (this.countOfAnswers === 0) {
                //     this.$http.post('http://localhost/ajaxfile.php', {
                //         request: 3,
                //         question: this.question,
                //     }, {emulateJSON: true}).then(() => {
                //
                //     });
                // }
                this.id = parseInt(this.$refs[0].id);
                console.log(this.$refs[0]);
                this.arrayOfQuestions.forEach(question => {
                    if (question.id === this.id) {
                        question.answers.push({});
                        question.answers[this.countOfAnswers].name='';
                        question.answers[this.countOfAnswers].isTrue=false;
                        this.idOfQuestion=question.id;
                    }
                });
                this.countOfAnswers = this.countOfAnswers + 1;

            },
            isCorrect(correct) {
                this.checkbox = correct;

            },
            deleteQuestion() {
                let i = 0;
                this.id = parseInt(this.$refs[0].id);
                console.log(this.$refs[0]);
                this.arrayOfQuestions.forEach(question => {
                    if (question.name === this.question) {
                        this.arrayOfQuestions.splice(i, 1);
                    }
                    i++;
                });
                this.$refs[1].remove();
                this.$emit('deleteQuestion');
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