<template>
    <div id="app">
        <table class="table block-center" style="width: 600px">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Quiz</th>
            </tr>
            </thead>
            <tbody v-for="index in quiz" :key="quiz[index]">
            <tr>
                <th scope="row"></th>
                <td>{{index.id}}</td>
                <td>{{index.subject}}</td>
                <td><button class="btn btn-success pull-right">
                    <router-link id="router" :to="{ name: 'quizTemplate', params: { id: index.id } }">START</router-link>
                </button></td>
            </tr>

            </tbody>
        </table>
    </div>

</template>

<script>


    export default {
        name: 'startQuiz',
        data(){
            return {
                quiz:[]
            }
        },
        created() {
            this.$http.get('http://localhost:8080/quiz'

                , {emulateJSON: true}).then((response) => {
               this.quiz=response.body;
               console.log(response.body);
            });
        },
        methods:{

    }
    }
</script>

<style scoped>
.table{
    margin:auto;
}
    #router{
        text-decoration: none;
    }
</style>

