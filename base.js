(function(){
    requirejs.config({
        baseUrl: "../",
        paths:{
            "promise":"/q",
            "vue":"https://unpkg.com/vue/dist/vue",
            "vue.router":"https://unpkg.com/vue-router/dist/vue-router"
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

        },
        deps:["vue","vue.router","promise","index"] 
    });
})();