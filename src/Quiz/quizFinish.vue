<template>
    <div class="jumbotron text-center">
        <div v-if="data.correct_answer_count < data.min_correct">
            <h2 class="display-3" style="color:red;"> You have not passed quiz </h2>
        </div>
        <div v-if="data.correct_answer_count >= data.min_correct">
            <h2 class="display-3" style="color:green;"> You have successfully passed quiz </h2>
        </div>

        <h3>{{data.correct_answer_count + '/'+data.number_of_questions}}</h3>
        <h3>If you want pass quiz again pleas click on Quiz Again</h3>
        <hr>

        <p class="lead" style>
            <router-link id="router" tag='button' class="btn btn-success"
                         :to="{ name: 'quizTemplate', params: { id: data.quiz_id } }">Quiz Again
            </router-link>
        </p>
    </div>
</template>

<script>
  export default {
    name: 'quizFinish',
    data() {
      return {
        data: [],
      }
    },
    created() {
      this.$http.get(`http://localhost:8080/result/last`
        , {emulateJSON: true}).then((response) => {
        this.data = response.body;

        console.log(response.body);
      });
    }
  }

</script>

<style scoped>


</style>