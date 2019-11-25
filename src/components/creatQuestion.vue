<template>
    <div>
     
<div id='container'>
    
    <input id="input" type="text" ref='ds' placeholder="Type your question" > <br><br>
  <div v-for='index in count' :key='index' id="d">
<createAnswer v-on:input='counter' v-on:decrement='decrement'/>
        </div>
</div>

    </div>
</template>
<script>
import createAnswer from './createAnswer'
export default {
    name:'createQuestion',
    components:{
createAnswer
    },
    data(){
        return {
            count:1,
        }
    },
    methods:{
        counter(){
           this.count+=1
        },
        decrement(){
            this.count--;
        }
    }

}
</script>

<style scoped>
#d{
    background-color:#f4f4f4
}
#container{
    width:600px;
  
}
#input{
    width:500px;
    font-size:20px;
}
</style>