define(["vue","text!/components/button-counter.tpl.html"], function(Vue, template) {

  var data = {
  };

  var methods = {
      say:function(item){
          alert(item);
      }
  };

  return Vue.component("button-counter", {
    props: ['title', 'counterValue'],
    template: template,
    created: function() {
        console.log('created button instance');
    },
    data: function() {
      return {
          "count": this.counterValue || 0
      };
    }});
});