define(['/components/button-counter.vue.js', "text!/pages/home.tpl.html"], function(buttonCounter, tpl) {

  var data = {
  };

  var methods = {
      say:function(item){
          alert(item);
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







