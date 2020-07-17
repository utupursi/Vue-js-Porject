<template>
  <div id="app">
    <div class="container-fluid block-center">
      <div v-if="quizLoading" class="text-center">
        <b-spinner variant="primary" label="Spinning"></b-spinner>
      </div>
      <div class="modal-dialog" id="c">
        <ul id="ul">
          <div class="modal-content" v-if="!quizLoading">
            <div class="modal-header">

              <h3>
                <i id="quizName">{{quizTemplate.subject}}</i>
              </h3>

            </div>
            <div class="modal-body">


              <div class="quiz" id="quiz">

                <div v-for="question in questionsTemplate" :key="questionsTemplate[question]">
                  <div>
                    <h3>{{question.name}} </h3>
                    <hr>

                  </div>
                  <loadAnswer v-for="answers in question.answers"
                              :key=question.answers[answers]
                              :answers='answers'
                              :question="question"
                              :questions="questionsTemplate"
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


            <div style="padding: 0 15px 15px 0" id="container">
              <button id="nextButton" type="button" class="btn btn-success pull-right"
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
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'quizTemplate',
    components: {
      loadAnswer
    },

    data() {
      return {
        arrayOfAnswers: [],
        arrayOfQuestions: [],
      }
    },
    created() {
      let id = this.$route.params.id;
      this.getQuiz(id);
      this.getQuestions(id);
    },
    computed: {
      ...mapGetters(['quizTemplate', 'questionsTemplate', 'quizLoading']),
    },
    methods: {
      ...mapActions(['getQuiz', 'getQuestions', 'saveResult']),
      submitData() {
        this.arrayOfAnswers.push({});
        this.arrayOfAnswers[this.arrayOfAnswers.length - 1].minCorrect = this.$store.getters['quizTemplate'].min_correct;
        this.arrayOfAnswers[this.arrayOfAnswers.length - 1].maxQuestion = this.$store.getters['quizTemplate'].max_question;
        this.arrayOfAnswers[this.arrayOfAnswers.length - 1].quizId = this.$store.getters['quizTemplate'].id;
        console.log(this.arrayOfAnswers);
        let data = {
          quiz: this.arrayOfAnswers,
          questions: this.arrayOfQuestions
        }
        this.saveResult(data);
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

