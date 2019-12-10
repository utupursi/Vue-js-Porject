<template>
    <div style="padding: 1em">
        <div class="row">
            <div class="col-md-4">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        Quiz Information
                    </div>
                    <div class="panel-body">
                        <br>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Quiz Title</label>
                            <input type="text" class="form-control" id="formGroupExampleInput"
                                   placeholder="Example input"
                                   v-model="quiz" v-on:input="inputQuiz">
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Min correct</label>
                            <input type="text" class="form-control" id="formGroupExampleInput"
                                   placeholder="Example input"
                                   v-model="minCorrect" v-on:input="inputMinCorrect">
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Maximal number of questions</label>
                            <input type="text" class="form-control" id="formGroupExampleInput"
                                   placeholder="Example input"
                                   v-model="maxNumberOfQuestions" v-on:input="inputMaxQuestion">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3 class="pull-left" style="display: inline-block;margin:0">
                            Questions
                        </h3>

                        <div class="clearfix"></div>
                    </div>
                    <div class="panel-body">
                        <div v-if="error!==''" style="color:red;font-size:20px">
                            {{error}}
                        </div>

                        <div v-for='index in questionCount' :key='index' id="d">
                            <div v-if='questionCount > 0'>
                                <createQuestion :countOfQuestion="questionCount"
                                                :indexOfQuestions="index"
                                                :arrayOfQuestions="arrayOfQuestions"

                                />
                            </div>
                        </div>
                        <button type="button" @click="submit" id='but'>Submit</button>
                        <button class="btn btn-success pull-right"
                                v-on:click='addComponent'>+ Add Question
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CreateQuestion from './creatQuestion'

    export default {
        components: {
            CreateQuestion
        },
        data() {
            return {
                questionCount: 0,
                quiz: '',
                error: '',
                question: '',
                minCorrect: '',
                errorOfMinCorrect: '',
                errorOfQuiz: '',
                arrayOfQuestions: [],
                maxNumberOfQuestions: ''
            }
        },
        methods: {
            addComponent() {
                if (parseInt(this.maxNumberOfQuestions) === this.questionCount) {
                    this.error = 'Number of questions can not be more than maximal number';
                }
                // console.log(this.question);
                // if(this.question===''&&this.questionCount>0){
                //     this.error='Question can not be blank';
                // }
                else {
                    this.error = '';
                    this.errorOfQuiz = '';
                    this.arrayOfQuestions.push({});
                    this.arrayOfQuestions.quizTitle = this.quiz;
                    this.arrayOfQuestions.minCorrect = this.minCorrect;
                    this.arrayOfQuestions.maxQuestion = this.maxNumberOfQuestions;
                    this.arrayOfQuestions[this.arrayOfQuestions.length - 1].name = '';
                    this.arrayOfQuestions[this.arrayOfQuestions.length - 1].answers = [];
                    this.arrayOfQuestions[this.arrayOfQuestions.length - 1].id = this.questionCount;
                    this.questionCount += 1;
                }

            },
            submit() {
                var counter = 0;
                var count = 0;
                let questions = this.arrayOfQuestions;
                for (let i = 0; i < questions.length; i++) {
                    if (questions[i].name === '' || questions[i].answers === []) {
                        counter++;
                        this.error = 'You should fill all questions'
                        break;
                    }
                    if (questions[i].answers.length === 0) {
                        counter++;
                        this.error = 'Questions should have answers';
                        break;
                    }
                    for (let g = 0; g < questions[i].answers.length; g++) {
                        if (questions[i].answers[0].name !== '' && questions[i].answers[1] === undefined) {
                            counter++;
                            this.error = 'Question should have more than one answer ';
                            break;
                        }
                        if (questions[i].answers[g].name === '') {
                            counter++;
                            this.error = 'Answer can not be blanck';
                            break;
                        }
                        if (questions[i].answers[g].isTrue === true) {
                            count++;
                        }
                    }
                    if (counter > 0) {
                        break;
                    }
                    if (count < 1) {
                        counter++;
                        this.error = 'Question should have correct answer';
                        break
                    }
                    count = 0;
                }
                if (counter < 1) {
                    let id;
                    console.log(this.arrayOfQuestions);
                    this.$http.post('http://localhost:8080/quiz/create', {
                        subject: this.quiz,
                        min_correct: this.minCorrect,
                        max_question: this.maxNumberOfQuestions,
                    }, {emulateJSON: true}).then(() => {
                    });
                    this.$http.get('http://localhost:8080/quiz/last', {
                    }, {emulateJSON: true}).then((data) => {
                           id=data.id;
                    });
                    console.log(id);
                    this.error = '';
                }
            },
            inputQuiz() {
                this.arrayOfQuestions.quizTitle = '';
                this.arrayOfQuestions.quizTitle += this.quiz;
            },
            inputMinCorrect() {
                this.arrayOfQuestions.minCorrect = '';
                this.arrayOfQuestions.minCorrect += this.minCorrect;
            },
            inputMaxQuestion() {
                this.arrayOfQuestions.maxQuestion = '';
                this.arrayOfQuestions.maxQuestion += this.maxNumberOfQuestions;
            }

        }
    }

</script>

<style scoped>

    /*#d label {*/
    /*    display: block;*/
    /*}*/

    /*#container {*/
    /*    background-color: #FFFFFF;*/
    /*}*/

    /*#input {*/
    /*    width: 400px;*/
    /*    font-size: 16px;*/
    /*    padding: 7px 10px;*/
    /*}*/

    /*#but {*/
    /*    font-size: 1.125em;*/
    /*    display: inline-block;*/
    /*    min-width: 160px;*/
    /*    height: 40px;*/
    /*    margin-top: 10px;*/
    /*    box-sizing: border-box;*/
    /*    background-color: whitespace;*/
    /*    color: #fff;*/
    /*    text-align: center;*/
    /*    cursor: pointer;*/
    /*    cursor: hand;*/
    /*    border-radius: 1px;*/
    /*    -webkit-border-radius: 1px;*/
    /*    -moz-border-radius: 1px;*/
    /*    line-height: 40px;*/
    /*}*/
</style>