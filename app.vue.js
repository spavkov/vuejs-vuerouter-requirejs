define(["vue","vue.router","routes"], function(Vue,VueRouter,routes) {

    Vue.use(VueRouter);

    var data = {

    };

    var router = new VueRouter({
        mode: 'history',
        routes:routes
    });

/*     router.beforeEach(function (to, from, next) {
        console.log('navigation to ' + to + ' '+'from ' + from);
        next()
    }); */


    var methods = {

    };


    var app = new Vue({
        router:router,
        created: function(){
            console.log('app created');
        },
        el:"#app",
        data:data,
        methods:methods
    });

});