<template>
    <div id="startQuiz">
        <div v-if="quizLoading" class="text-center">
            <b-spinner variant="primary">...Loading</b-spinner>
        </div>
        <div v-else>
            <b-card-group deck>
                <div v-for="index in quizzes" :key="quiz[index]">
                    <b-card
                        :title=index.subject
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="width: 35rem;"
                        class="mb-4 ml-5 mt-3"
                    >
                        <br>
                        <div>
                            <b-button id="router" class="btn btn-success mr-2 btn-sm"
                                      :to="{ name: 'quizTemplate', params: { id: index.id } }">Start
                            </b-button>

                        </div>
                    </b-card>
                </div>
            </b-card-group>
        </div>
<!--        <div v-else class="panel" style="width: 30rem; opacity: 0.7" v-for="index in quizzes" :key="quiz[index]">-->
<!--            <div class="panel-header" style="width: 200px">-->
<!--                <h5 class="panel-title">{{index.subject}}</h5>-->
<!--            </div>-->
<!--            <div class="panel-body">-->
<!--                <router-link id="router" tag='button' class="btn btn-success"-->
<!--                             :to="{ name: 'quizTemplate', params: { id: index.id } }">START-->
<!--                </router-link>-->
<!--            </div>-->
<!--        </div>-->

    </div>

</template>

<script>

  import {mapActions, mapGetters} from 'vuex';

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
      ...mapGetters(['quizzes', 'quizLoading'])
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
        /*background-color: #00b3b3;*/
        transition: transform .2s; /* Animation */
        width: 200px;
        margin-left: 50px;
        border: 2px solid;

    }

    #startQuiz {
        margin-top: 10px;
        /*background-color: #000033;*/
    }

    .panel:hover {
        /*transform: scale(1.5); !* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) *!*/
    }
</style>

