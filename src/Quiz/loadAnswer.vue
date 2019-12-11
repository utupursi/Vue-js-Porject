<template>
    <div id="app">

        <label :id="answers.id"  class="btn-lg btn-primary btn-block">
            <label>
                <label >
                    <input type="radio" :id="answers.id" name="option" class="classOfInput" ><span>{{answers.name}}</span>
                </label>
            </label>

        </label>
    </div>


</template>

<script>
    export default {
        name: 'loadAnswer',
        props:{
            answers:Object,
        }
    }
</script>

<style scoped>

</style>

