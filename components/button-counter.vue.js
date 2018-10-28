define(["vue","text!/components/button-counter.tpl.html"], function(Vue, template) {

  var data = {
  };

  var methods = {
      increaseCounter:function(){
          this.count++;
      }
  };

  return Vue.component("button-counter", {
    methods: methods,
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