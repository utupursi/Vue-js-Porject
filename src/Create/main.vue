<template>
    <div id='con' style="text-align: center">
        The Easiest #1 Rated Online Quiz Maker<br>
        Publish your quiz in a matter of minutes. Go ahead Try it now
        <br><br>
        <button type='button' class='btn btn-success' id='button' @click="redirectToQuiz">
Create Quiz
        </button>
    </div>
</template>

<script>
    export default {
        name: 'main',

        methods: {
            redirectToQuiz(){
                this.$router.push('/createQuiz');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
