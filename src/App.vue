<template>
    <div id="app">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
              integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
              crossorigin="anonymous">

        <div class="top-bar-left">
            <ul class="menu main nav show-for-large">
                <li><a class="top-bar__logo" href="/" title="Fly home">
                    <img src="https://d24s38jd6z1bka.cloudfront.net/e3f6ce90/images/deadlyduck/logos/easy-lms-logo.svg"
                         alt="Easy LMS" class="hide-for-small-only">
                </a></li>
                <li id="s1"><a href="/#/quizResult">Quiz Result</a></li>
                <li id="s2"><a href="/#/startQuiz">Start Quiz</a></li>
                <li id="s3"><a href="/#/quizList">Quizzes</a></li>
            </ul>
        </div>
        <router-view></router-view>
        <div v-if="this.$router.currentRoute.fullPath==='/'">
            <mainVue></mainVue>
        </div>
        <br>
        <notifications group="foo" width="400px" font-size="30px"/>
    </div>
</template>

<script>

  import mainVue from './Create/main'

  export default {
    name: 'app',
    components: {
      mainVue
    },
    data() {
      return {
        msg: 'Hello',
        name: ''
      }
    },
    created() {
      console.log(this.$router.currentRoute.fullPath);
    }

  }
</script>

<style>
    .notification-title{
        font-size: 16px;
    }
    .notification-content{
        font-size: 14px;
    }
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*background-color: #000033;*/
    }

    #button {

        width: 150px;
        height: 50px;
    }

    #con {
        font-size: 20px;
        color: white;
    }

    #router {
        color: white;

    }

    #s {
        display: inline-block;
    }

    #s a {
        color: black;
    }

    #s a:hover {
        background-color: white
    }

    .top-bar-left {
        background-color: #00b3b3;
    }

    img {
        width: 100px;
    }
</style>

