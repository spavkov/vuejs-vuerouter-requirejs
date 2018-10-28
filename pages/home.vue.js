define(['/components/button-counter.vue.js', "text!/pages/home.tpl.html"], function(buttonCounter, tpl) {

  var data = {
      buttonDisabled: true
  };

  var methods = {
      greet:function(){
          alert('greet');
      }
  };

  return {
      methods:methods,
      template:tpl,
      created: function() {
          console.log('created home');
      },
      data:function(){
          return data
      }
  };
});







