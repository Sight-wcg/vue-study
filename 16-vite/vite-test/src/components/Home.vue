<template>
<h1>{{message}}</h1>
</template>

<script>
export default {

  props:{
    message:{
      type: String,
      required:true,
    }
  },

/**
 * props 父组件传递的属性
 */
 //setup(props,context) {
  setup(props,{attrs,slots,emit}) {
    console.log(props.message);
    console.log(attrs.id);
    
  }
}
</script>

<style scoped>
  
</style>