<template>
    <div id="app">
        <!--        <table class="table block-center" style="width: 600px">-->
        <!--            <thead>-->
        <!--            <tr>-->
        <!--                <th scope="col">#</th>-->
        <!--                <th scope="col">Quiz</th>-->
        <!--            </tr>-->
        <!--            </thead>-->
        <!--            <tbody v-for="index in quiz" :key="quiz[index]">-->
        <!--            <tr>-->
        <!--                <th scope="row"></th>-->
        <!--                <td>{{index.id}}</td>-->
        <!--                <td>{{index.subject}}</td>-->
        <!--                <td><button class="btn btn-success pull-right">-->
        <!--                    <router-link id="router" :to="{ name: 'quizTemplate', params: { id: index.id } }">START</router-link>-->
        <!--                </button></td>-->
        <!--            </tr>-->

        <!--            </tbody>-->
        <!--        </table>-->
        <div class="panel" style="width: 18rem;" v-for="index in quiz" :key="quiz[index]">
            <div class="panel-header">
                <h5 class="panel-title">{{index.subject}}</h5>
            </div>
            <div class="panel-body">
                <button class="btn btn-success pull-right">
                    <router-link id="router" :to="{ name: 'quizTemplate', params: { id: index.id } }">START</router-link>
                </button>
            </div>
        </div>

    </div>

</template>

<script>


    export default {
        name: 'startQuiz',
        data() {
            return {
                quiz: []
            }
        },
        created() {
            this.$http.get('http://localhost:8080/quiz'

                , {emulateJSON: true}).then((response) => {
                this.quiz = response.body;
                console.log(response.body);
            });
        },
        methods: {}
    }
</script>

<style scoped>
    .table {
        margin: auto;
    }

    #router {
        text-decoration: none;
    }
    .panel{
        display: inline-block;
        padding: 50px;
        background-color: green;
        transition: transform .2s; /* Animation */
        width: 200px;
        margin-left:30px;
    }
    .panel:hover {
        transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }
</style>

