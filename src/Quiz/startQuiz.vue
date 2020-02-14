<template>
    <div id="app">
        {{quizzes}}
        <div class="panel" style="width: 18rem; opacity: 0.7" v-for="index in quiz" :key="quiz[index]">
            <div class="panel-header">
                <h5 class="panel-title">{{index.subject}}</h5>
            </div>
            <div class="panel-body">
                <router-link id="router" tag='button' class="btn btn-success pull-right"
                             :to="{ name: 'quizTemplate', params: { id: index.id } }">START
                </router-link>
            </div>
        </div>

    </div>

</template>

<script>

  import {mapActions, mapState} from 'vuex';

  export default {
    name: 'startQuiz',
    data() {
      return {
        quiz: []
      }
    },
    created() {
      this.startQuiz();
    },
    computed: {
      ...mapState({
        quizzes: state => state.quizzes || {},
      }),
    },
    methods: {
      ...mapActions(['startQuiz']),
    }
  }
</script>

<style scoped>
    .table {
        margin: auto;
    }

    #router {
        text-decoration: none;
    }

    .panel {
        display: inline-block;
        padding: 50px;
        background-color: #00b3b3;
        transition: transform .2s; /* Animation */
        width: 200px;
        margin-left: 50px;

    }

    .panel:hover {
        transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
</style>

