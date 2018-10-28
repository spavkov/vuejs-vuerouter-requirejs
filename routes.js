define(["resolveComponent", "appConfig"], function(ResolveComponent, appConfig) {

    var routes = [];

    routes.push({
        path: '/',
        component: ResolveComponent("pages/home.vue")
    });

    routes.push({
        path: '/home',
        component: ResolveComponent("pages/home.vue")
    });

    routes.push({
        path: '/page2',
        component: ResolveComponent("pages/page2.vue")
    });


    routes.push({
        path: '*',
        component: ResolveComponent("pages/notFound.vue")
    });
 
    return routes;

});