<template>
    <div id="container">
        <table class="table">
            <thead >
            <tr>
                <th scope="col" >Quiz Name</th>
                <th scope="col">Minimal Correct Answers</th>
                <th scope="col">Number of correct answers</th>
                <th scope="col">Number of questions</th>
                <th scope="col">Percent</th>
                <th scope="col">Passed</th>
                <th scope="col">Date of pass quiz</th>
            </tr>
            </thead>
            <tbody v-for="result in dataOfResults" :key="dataOfResults[result]">
            <tr>
                <td>{{result.quiz.subject}}</td>
                <td>{{result.min_correct}}</td>
                <td>{{result.correct_answer_count}}</td>
                <td>{{result.number_of_questions}}</td>
                <td>
                    {{Math.round((parseInt(result.correct_answer_count)*100)/(parseInt(result.number_of_questions)))+'%'}}
                </td>
                <td v-if="result.correct_answer_count<result.min_correct">
                    <div style="color:red">Fail</div>
                </td>
                <td v-else>
                    <div style="color:green">Passed</div>
                </td>
                <td>{{result.quiz_pass_date}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'quizResult',
        data() {
            return {
                dataOfResults: [],
                quizPassDate:[]
            }
        },
        created() {
            this.$http.get(`http://localhost:8080/result`, {emulateJSON: true}).then((response) => {
                this.dataOfResults = response.body;
                console.log(this.dataOfResults);
            });
        }
    }

</script>

<style scoped>
    .table {
        background-color: white;

    }
    #container{
        padding-left:15px;
        padding-right:15px;
    }

</style>