<template>
    <div id="app">

        <label :id="answers.id" class="btn-lg btn-primary btn-block">
            <label>
                <label>
                    <input type="radio" :id="answers.id" :ref="0" :name="question.id" class="classOfInput"
                           :value="answers.name" v-model="radioButton" v-on:input="input"><span>{{answers.name}}</span>
                </label>

            </label>

        </label>
    </div>


</template>

<script>
    export default {
        name: 'loadAnswer',
        props: {
            answers: Object,
            question: Object,
            questions: Array,
            arrayOfAnswers:Array,
            arrayOfQuestions:Array
        },
        data() {
            return {
                radioButton: '',
            }
        },

        methods: {
            input() {
                if(this.arrayOfAnswers.length===0){
                this.questions.forEach(() => {
                    this.arrayOfAnswers.push({id: '', selectedAnswer: ''});
                    this.arrayOfQuestions.push({questionId:''})
                })
                    }
                let id = this.$refs[0].id;
                let value = this.$refs[0].value;
                let name=this.$refs[0].name;
                let index = this.questions.indexOf(this.question);
                this.arrayOfAnswers[index].id= id;
                this.arrayOfAnswers[index].selectedAnswer = value;
                this.arrayOfQuestions[index].questionId=name;
            }
        }
    }
</script>

<style scoped>

</style>

