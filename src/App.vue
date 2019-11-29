<template>
    <div id="app">
        <div id='con' style="text-align: center">
            The Easiest #1 Rated Online Quiz Maker<br>
            Publish your quiz in a matter of minutes. Go ahead Try it now
            <br><br>
            <button type='button' class='btn btn-success' id='button'>
                <router-link to="createQuiz" id="router">Create Quiz</router-link>
            </button>
        </div>
        <br>
        <router-view></router-view>
    </div>

</template>

<script>


    export default {
        name: 'app',
        components: {},
        data() {
            return {
                msg: 'Hello',
                name: ''
            }
        },
        methods: {
            fun(name) {
                this.name = name;
            },

        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background-color: dodgerblue;
    }

    #button {
        background-color: MediumVioletRed;
        border-color: MediumVioletRed;
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
</style>
