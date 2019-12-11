<template>
  <div class="hello" v-on:click='change'>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg:String,
  },
  data(){
return {
  name:'gio'
}
  },
  methods:{
  change(){
    this.$emit('del',this.name)
  
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
