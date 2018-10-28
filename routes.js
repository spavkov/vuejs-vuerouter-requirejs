define(["resolveComponent"], function(ResolveComponent) {

    var routes = [];

    routes.push({
        path: '/',
        component: ResolveComponent("pages/home.vue")
    });


    routes.push({
        path: '/page2',
        component: ResolveComponent("pages/page2.vue")
    });



    return routes;

});