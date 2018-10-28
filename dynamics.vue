<template>
  <div>
    <p>It is dynamically loaded vue file</p>
    <p>Created at: {{date}}</p>
  </div>
</template>
<script>
define(['Vue'], function(Vue){
  return new Vue({
    template: template,
    data: {
      date: ''
    },
    created: function(){
      this.date = new Date();
    }
  })
})
</script>