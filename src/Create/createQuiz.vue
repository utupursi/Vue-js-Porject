<template>
    <div style="padding: 1em">
        <div class="row">
            <div class="col-md-4">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        quiz1 Information
                    </div>
                    <div class="panel-body">
                        <br>
                        <div class="form-group">
                            <label for="formGroupExampleInput">quiz1 Title</label>
                            <input type="text" class="form-control" id="formGroupExampleInput"
                                   placeholder="Example input"
                                   v-model="quiz1" v-on:input="inputQuiz">
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Min correct</label>
                            <input type="text" class="form-control" id="formGroupExampleInput"
                                   placeholder="Example input"
                                   v-model="minCorrect" v-on:input="inputMinCorrect">
                            <div v-if="errorOfMinCorrect" style="color:red">{{errorOfMinCorrect}}</div>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Maximal number of questions</label>
                            <input type="text" class="form-control" id="formGroupExampleInput"
                                   placeholder="Example input"
                                   v-model="maxNumberOfQuestions" v-on:input="inputMaxQuestion">
                            <div v-if="errorOfMaxNumberOfQuestion" style="color:red">{{errorOfMaxNumberOfQuestion}}
                            </div>
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
                                                v-on:deleteQuestion="deleteQuestion"

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

  import {mapActions} from 'vuex';

  export default {
    components: {
      CreateQuestion
    },
    data() {
      return {
        questionCount: 0,
        counter: 0,
        quiz1: '',
        error: '',
        question: '',
        minCorrect: '',
        errorOfMinCorrect: '',
        errorOfMaxNumberOfQuestion: '',
        errorOfQuiz: '',
        arrayOfQuestions: [],
        arrayOfQuiz: [{}],
        maxNumberOfQuestions: '',
        errorOfMinNumber: '',
        errorOfMaxNumber: ''
      }
    },
    // computed: {
    //   ...mapState(['quiz']),
    // },
    methods: {
      ...mapActions(['saveQuiz']),
      addComponent() {
        if (parseInt(this.maxNumberOfQuestions) === this.arrayOfQuestions.length) {
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
          this.arrayOfQuiz = [];
          this.arrayOfQuiz.push({});
          this.arrayOfQuiz[0].quizTitle = this.quiz1;
          this.arrayOfQuiz[0].minCorrect = this.minCorrect;
          this.arrayOfQuiz[0].maxQuestion = this.maxNumberOfQuestions;
          this.arrayOfQuestions[this.arrayOfQuestions.length - 1].name = '';
          this.arrayOfQuestions[this.arrayOfQuestions.length - 1].answers = [];
          this.arrayOfQuestions[this.arrayOfQuestions.length - 1].id = this.questionCount;
          this.questionCount += 1;
          console.log(this.arrayOfQuiz);
        }

      },
      submit() {
        var counter = 0;
        var count = 0;
        let questions = this.arrayOfQuestions;
        if (this.arrayOfQuestions.length === 0) {
          counter++;
          this.error = 'You should create question';
          this.$notify({
            group: 'foo',
            type: 'error',
            title: 'Error',
            text: this.error,
            speed: 1000,
          });
        }
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
          if (this.quiz1 === '') {
            counter++;
            this.error = 'quiz1 title can not be blank';
            break;
          }
          if (this.minCorrect === '') {
            counter++;
            this.error = 'Minimal  correct questions can not be blank';
            break;
          }
          if (this.maxNumberOfQuestions === '') {
            counter++;
            this.error = 'Maximal number of questions  can not be blank';
            break;
          }
          if (this.minCorrect > this.maxNumberOfQuestions) {
            counter++;
            this.error = 'Minimal correct questions can not be more than maximal number of questions';
            break;
          }
          if (this.maxNumberOfQuestions > 20) {
            counter++;
            this.error = 'Maximal number of questions should be less than 20';
            break;
          }
          if (this.errorOfMinNumber) {
            counter++;
            break;
          }
          if (this.errorOfMaxNumber) {
            counter++;
            break;
          }
          count = 0;
        }
        if (counter < 1) {
          let data = {
            quiz: this.arrayOfQuiz,
            questions: this.arrayOfQuestions
          }
          this.saveQuiz(data);
          this.error = '';
          // window.location.href = "../App.vue";
        }
      },
      inputQuiz() {
        this.arrayOfQuiz[0].quizTitle = '';
        this.arrayOfQuiz[0].quizTitle += this.quiz1;
      },
      inputMinCorrect() {
        if (isNaN(this.minCorrect) && this.minCorrect !== '' && !Number.isInteger(this.minCorrect)) {
          this.errorOfMinCorrect = 'Minimal correct question should be number';
          this.errorOfMinNumber++;
        } else {
          this.errorOfMinCorrect = '';
        }
        this.arrayOfQuiz[0].minCorrect = '';
        this.arrayOfQuiz[0].minCorrect += this.minCorrect;
      },
      inputMaxQuestion() {
        if (isNaN(this.maxNumberOfQuestions) && this.maxNumberOfQuestions !== '' && !Number.isInteger(this.maxNumberOfQuestions)) {
          this.errorOfMaxNumberOfQuestion = 'Maximal number of questions should be number';
          this.errorOfMaxNumber++;
        } else {
          this.errorOfMaxNumberOfQuestion = '';
        }
        this.arrayOfQuiz[0].maxQuestion = '';
        this.arrayOfQuiz[0].maxQuestion += this.maxNumberOfQuestions;

      },
      deleteQuestion() {
        this.error = '';
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