<template>
    <div class="row">
        <div class="col-md-8">
            <div class="form-group">
                <input class="form-control" v-bind:id="index"  type="text" :ref='0' placeholder="Type your question"
                       v-model='answer' v-on:input='input'>
            </div>
        </div>
        <div class="col-md-4">
            <p id="check">correct answer <input type="checkbox" v-model="checkbox" id="in" v-on:change="check"></p>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'createAnswer',
        props: {
            count: Number,
            arrayOfAnswers:Array,
            arrayOfQuestions:Array,
            index:Number,
            countOfQuestion:Number,
            idOfQuestion:Number,
        },
        data() {
            return {
                answer: '',
                counter: 0,
                checkbox: false,
            }
        },
        methods: {
            input() {
              let id=this.$refs[0].id-1;
              let idOfQuestions=this.idOfQuestion;
              console.log(this.arrayOfQuestions[idOfQuestions]);
                this.arrayOfQuestions.forEach(question => {
                    if (question.id === idOfQuestions) {
                        question.answers[id].name='';
                        question.answers[id].name+=this.answer;
                    }
                });
                console.log(this.arrayOfQuestions);
                // this.$emit('input', this.answer);
            },
            check() {
                let id=this.$refs[0].id-1;
                let idOfQuestions=this.idOfQuestion;
                this.arrayOfQuestions.forEach(question => {
                    if (question.id === idOfQuestions) {
                        question.answers[id].isTrue=this.checkbox;
                    }
                });
            }
        },

    }
</script>

<style scoped>
    /*#input{*/
    /*    width:350px;*/
    /*    margin-left:123px;*/
    /*    font-size: 14px;*/

    /*}*/
    /*#check{*/
    /*    margin-left:290px;*/
    /*    margin-top:-10px;*/
    /*}*/
    /*#in{*/

    /*}*/
</style>