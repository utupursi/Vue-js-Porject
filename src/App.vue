<template>
    <div id="app">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

        <div class="top-bar-left">
            <ul class="menu main nav show-for-large">
                <a class="top-bar__logo" href="/" title="Fly home">
                    <img src="https://d24s38jd6z1bka.cloudfront.net/e3f6ce90/images/deadlyduck/logos/easy-lms-logo.svg"
                         alt="Easy LMS" class="hide-for-small-only">
                </a>
                <li id="s"><a href="https://www.onlinequizcreator.com/pricing/item7640">Quiz Results</a></li>
                <li id="s"><router-link to="startQuiz" id="router">Start Quiz</router-link></li>
                <li id="s"><a href="https://www.onlinequizcreator.com/about-us/item12719">About us</a></li>
            </ul>
        </div>
         <mainVue/>
        <br>
        <router-view></router-view>
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

    }
</script>

<style>
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
      background-color: #000033;
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
        background-color:#00b3b3;
    }

    img {
        width: 100px;
    }
</style>

