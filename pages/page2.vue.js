define([], function() {

  var data = {
  };

  var methods = {
      say:function(item){

      }
  };

  return {
      methods:methods,
      template:"<h1>page2</h1>",
      created: function() {
          console.log('created page2');
      },
      data:function(){
          return data
      }
  };
});

