<template>
    <div>
        
       <input id="input" type="text" ref='ds' placeholder="Type your question" v-model='content' v-on:input='input' > <br><br>
    </div>
</template>


<script>
export default {
    name:'createAnswer',
    props:{
        count:Number,
    },
    data(){
        return{
           content:'',
           counter:0
        }
    },
    methods:{
        input(){
            if(this.content!='' &&this.content.length<2&&this.counter<1){
               this.counter++;
                this.$emit('input',this.count++);
            }
            if(this.content==''&&this.counter>0){
              this.counter=0;
               this.$emit('decrement',this.count--);
            }
        }
    }
}
</script>