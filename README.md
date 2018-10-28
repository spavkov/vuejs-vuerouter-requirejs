# vuejs-vuerouter-requirejs
Just a minimal project that shows its possible to avoid modern javascript fatigue - no webpack, no babel, no build, no nonsense :)

It shows how to use just requireJS for async/dynamic loading Vue components.
VueRouter is used for routing.

Components are loaded on demand.

Easy to debug because breakpoints can be placed directly in vue components (no additional plugins or source maps needed).

Works on all browsers, including the ancient ones :)

Additives free!

# How to use
start server in the repository root, for example use local-web-server (npm module, i know, its a bummer man... But i promise its the only one you need for this app).
local-web-server --spa index.html

And then open in browser https://localhost:8000/
