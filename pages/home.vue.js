define([], function() {

  var data = {
  };

  var methods = {
      say:function(item){
          alert(item);
      }
  };

  return {
      methods:methods,
      template:"<h1>homeeeeeeeeeeeeeeeeeeeee</h1>",
      created: function() {
          console.log('created home');
      },
      data:function(){
          return data
      }
  };
});







