<template>
    <div>
        <br>
<div id='container'>
      <div  id="d" >
        <br>
   <input id="input" type="text" ref='ds' placeholder="Type your quiz title"> <br><br>
    </div>
    <div v-for='index in count' :key='index' id="d"  >
        <br>
        <div v-if='count>0'>
     <createQuestion :count='count'/>
     </div>
    </div>
     <button id='myid' ref='myid' class="btn btn-success" v-on:click='addComponent'>+ Add Question</button>
</div>


    </div>
</template>

<script>
import CreateQuestion from './creatQuestion'
export default {
    components:{
CreateQuestion
    },
    data(){
        return {
            count:0
        }
    },
    methods:{
addComponent(){
    this.count+=1
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
    margin-left:380px;
}
#input{
    width:500px;
    font-size:20px;
}
</style>