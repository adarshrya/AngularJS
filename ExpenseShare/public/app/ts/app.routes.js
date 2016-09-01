"use strict";
var router_1 = require('@angular/router');
var share_routes_1 = require('./share.routes');
exports.routes = [
    share_routes_1.ShareRoutes,
];
exports.AppRoutes = [
    router_1.provideRouter(exports.routes),
];
