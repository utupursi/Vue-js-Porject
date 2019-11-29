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
                                   v-model="quiz" v-on:input="validationOfQuiz">
                            <div v-if="errorOfQuiz!==''" style="color:red;font-size:15px">
                                {{errorOfQuiz}}
                            </div>
                        </div>
                        <label for="formGroupExampleInput">Min correct</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"
                               v-model="minCorrect" v-on:input="validation">
                        <div v-if="errorOfMinCorrect!==''" style="color:red;font-size:15px">
                            {{errorOfMinCorrect}}
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
                                                :index="index"
                                                :arrayOfQuestions="arrayOfQuestions"
                                                v-on:input1="validationOfQuestion"
                                                v-on:answer="answer"/>
                            </div>
                        </div>

                        <button type="button" @click="submit()" id='but'>Submit</button>
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
                arrayOfQuestions: []
            }
        },
        methods: {
            addComponent() {
                if (this.quiz === '') {
                    this.errorOfQuiz = 'Quiz  can not be blank';
                }

                this.errorOfQuiz = '';
                this.insertdata();
                this.questionCount += 1;
                this.arrayOfQuestions.push('');

            },

            insertdata() {
                if (this.count === 0) {
                    this.$http.post('http://localhost/ajaxfile.php', {
                        request: 2,
                        quiz: this.quiz,
                        minCorrect: this.minCorrect
                    }, {emulateJSON: true}).then(() => {

                    });
                }
            },

            validationOfQuestion(question) {
                if (question !== '') {
                    this.question = question;
                }
                if (question === '') {
                    this.question = '';
                    this.empty = '';
                    this.a++;
                }
            },
            answer(answer) {
                console.log(answer);
            },
            validation() {
                let minCorrect;
                console.log(this.minCorrect)
                minCorrect = parseInt(this.minCorrect)
                console.log(minCorrect);
                if (Number.isInteger(minCorrect) === false) {
                    this.errorOfMinCorrect = 'Min correct should be number'
                }
                if (this.minCorrect == '') {
                    this.errorOfMinCorrect = '';
                }
                if (Number.isInteger(minCorrect)) {
                    this.errorOfMinCorrect = '';
                }
            },
            validationOfQuiz() {
                if (this.quiz === '') {
                    this.errorOfQuiz = 'Quiz can not be blank'
                } else {
                    this.errorOfQuiz = '';
                }
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