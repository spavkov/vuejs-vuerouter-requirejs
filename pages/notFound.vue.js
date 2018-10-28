define([], function() {

  var data = {
  };

  var methods = {
      say:function(item){

      }
  };

  return {
      methods:methods,
      template:"<h1>404!</h1>",
      created: function() {
          console.log('created 404');
      },
      data:function(){
          return data
      }
  };
});

