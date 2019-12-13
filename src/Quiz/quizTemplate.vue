<template>
    <div id="app">
        <div class="container-fluid">
            <div class="modal-dialog" id="c">
                <ul id="ul">
                    <div class="modal-content">
                        <div class="modal-header">

                            <h3>
                                <i id="quizName">{{quiz.subject}}</i>
                            </h3>

                        </div>
                        <div class="modal-body">


                            <div class="quiz" id="quiz">

                                <div v-for="question in questions" :key="questions[question]">
                                    <div>
                                        <h3>{{question.name}} </h3>
                                        <hr>

                                    </div>
                                    <loadAnswer v-for="answers in question.answers"
                                                :key=question.answers[answers]
                                                :answers='answers'
                                                :question="question"
                                                :questions="questions"
                                                :arrayOfAnswers="arrayOfAnswers"
                                                :arrayOfQuestions="arrayOfQuestions"
                                    />
                                    <br>
                                </div>
                                <hr>
                            </div>

                        </div>
                        <div class="modal-footer text-muted">
                            <span id="answer"></span>

                        </div>


                        <div style="padding: 0 15px 15px 0" class="pull-right" id="container">
                            <button id="nextButton" type="button" class="btn btn-success" hidden="hidden"
                                    @click="submitData">Submit
                            </button>
                        </div>

                        <div class="clearfix"></div>
                    </div>

                </ul>

            </div>


        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    import loadAnswer from "./loadAnswer";

    export default {
        name: 'quizTemplate',
        components: {
            loadAnswer
        },

        data() {
            return {
                quiz: [],
                questions: [],
                arrayOfAnswers: [],
                arrayOfQuestions: [],
            }
        },
        created() {
            let id = this.$route.params.id
            this.$http.get(`http://localhost:8080/quiz/${id}`
                , {emulateJSON: true}).then((response) => {
                this.quiz = response.body;
                console.log(response.body);
            });
            this.$http.get(`http://localhost:8080/quiz/getAll/${id}`
                , {emulateJSON: true}).then((response) => {
                this.questions = response.body;
                console.log(response.body);
            });
        },
        methods: {
            submitData() {
                this.arrayOfAnswers.push({});
                this.arrayOfAnswers[this.arrayOfAnswers.length - 1].minCorrect = this.quiz.min_correct;
                this.arrayOfAnswers[this.arrayOfAnswers.length - 1].maxQuestion = this.quiz.max_question;
                this.arrayOfAnswers[this.arrayOfAnswers.length - 1].quizId = this.quiz.id;
                console.log(this.arrayOfAnswers);
                this.$http.post("http://localhost:8080/result/create", {
                    arrayOfAnswers: this.arrayOfAnswers,
                    arrayOfQuestions: this.arrayOfQuestions
                }, {emulateJSON: true}).then(() => {
                });
                this.$router.push('/quizFinish');
            }
        }

    }
</script>

<style scoped>
    .table {
        margin: auto;
    }

</style>

