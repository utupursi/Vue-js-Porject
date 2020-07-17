<template>
    <div id="container">
        <b-table
            id="table-transition-example"
            :items="quizResults"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sortByForrmated="true"
            striped
            small
            primary-key="a"
            :tbody-transition-props="transProps"
        ></b-table>
<!--        <table class="table">-->
<!--            <thead>-->
<!--            <tr>-->
<!--                <th scope="col">Quiz Name</th>-->
<!--                <th scope="col">Minimal Correct Answers</th>-->
<!--                <th scope="col">Number of correct answers</th>-->
<!--                <th scope="col">Number of questions</th>-->
<!--                <th scope="col">Percent</th>-->
<!--                <th scope="col">Passed</th>-->
<!--                <th scope="col">Date of pass quiz</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody v-for="result in quizResults" :key="result.id">-->
<!--            <tr>-->
<!--                <td>{{result.quiz.subject}}</td>-->
<!--                <td>{{result.min_correct}}</td>-->
<!--                <td>{{result.correct_answer_count}}</td>-->
<!--                <td>{{result.number_of_questions}}</td>-->
<!--                <td>-->
<!--                    {{Math.round((parseInt(result.correct_answer_count)*100)/(parseInt(result.number_of_questions)))+'%'}}-->
<!--                </td>-->
<!--                <td v-if="result.correct_answer_count<result.min_correct">-->
<!--                    <div style="color:red">Fail</div>-->
<!--                </td>-->
<!--                <td v-else>-->
<!--                    <div style="color:green">Passed</div>-->
<!--                </td>-->
<!--                <td>{{result.quiz_pass_date}}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'quizResult',
    data() {
      return {
        quizPassDate: [],
        sortBy: 'quiz_pass_date',
        transProps: {
          // Transition name
          name: 'flip-list'
        },
        fields: [
          {key: 'id', sortable: true},
          {key: 'quiz.subject', sortable: true,label:'Subject'},
          {key: 'min_correct', sortable: true},
          {key: 'correct_answer_count', label: 'Number of correct answers', sortable: true},
          {key: 'number_of_questions', sortable: true},
          {
            key: 'Percent', sortable: true, formatter: (value, key, item) => {
              return Math.round((parseInt(item.correct_answer_count) * 100) / (parseInt(item.number_of_questions))) + '%';
            },
            sortByFormatted: true
          },
          {
            key: 'Passed', sortable: true, formatter: (value, key, item) => {
              if (item.correct_answer_count < item.min_correct) {
                return 'Fail';
              }
              return `Passed`;
            },
            sortByFormatted: true
          },
          {key: 'quiz_pass_date', sortable: true}
        ],
      }
    },
    created() {
      this.getQuizResult();
    },
    computed: {
      ...mapGetters(['quizResults'])
    },
    methods: {
      ...mapActions(['getQuizResult'])
    },
  }

</script>

<style scoped>
    .table {
        background-color: white;

    }

    #container {
        padding-left: 15px;
        padding-right: 15px;
    }

    table#table-transition-example .flip-list-move {
        transition: transform 1s;
    }

</style>