(function(){
    requirejs.config({
        baseUrl: "../",
        paths:{
            "promise":"https://cdnjs.cloudflare.com/ajax/libs/q.js/0.9.2/q",
            "vue":"https://unpkg.com/vue/dist/vue",
            "vue.router":"https://unpkg.com/vue-router/dist/vue-router",
            "text":"https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text"
        },
        waitSeconds: 15,
        map:{

        },
        urlArgs: "version=" + Date.now(),

        shim: {
            promise:{
                exports:"Q"
            },
            "vue": {
                exports: "Vue"
            },
            "vue.router": {
                exports: "VueRouter"
            }

        },
        callback:function(){
            console.log('All deps loaded in App')
        },
        deps:["vue","vue.router","promise", "app.vue"] 
    });
})();