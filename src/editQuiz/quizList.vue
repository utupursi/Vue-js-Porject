<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Quiz Name</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody v-for="quiz in quizzes" :key="quizzes[quiz]">
            <tr>
                <td></td>
                <td>{{quiz.subject}}</td>
                <td>
                    <router-link id="router"  tag='button' class="btn btn-success pull-right" :to="{ name: 'editQuiz', params: { id: quiz.id } }">START</router-link>

                </td>
                <td>
                    <button class="btn btn-danger">Delete</button>
                </td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'quizList',
        data() {
            return {
                quizzes: [],
                number: 1
            }
        },
        created() {
            this.$http.get(`http://localhost:8080/quiz`
                , {emulateJSON: true}).then((response) => {
                this.quizzes = response.body;
                console.log(this.quizzes);
            });
        },
        methods: {}
    }
</script>


<style scoped>
    .table {
        background-color: whitesmoke;
    }

</style>