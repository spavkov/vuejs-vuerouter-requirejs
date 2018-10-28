    <template>
        <div>
            <label>{{title}}</label>
            <button v-on:click="count++">You clicked me {{ count }} times.</button> 
        </div>
    </template>
    
    <script>
      define(["Vue"], function(Vue) {
          Vue.component("button-counter", {
              template: template, // the variable template will be injected 
                props: ['title', 'counterValue'],
              data: function() {
                  return {
                      "count": this.counterValue};
              },
                created: function(){
                 console.log('created ' + this.title + ' with counter ' + this.counterValue)
                }              
          });
        });
    </script> 