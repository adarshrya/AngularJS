"use strict";
var router_1 = require('@angular/router');
var fire_component_1 = require('./fire.component');
var rain_component_1 = require('./rain.component');
var star_component_1 = require('./star.component');
var tree_component_1 = require('./tree.component');
var plant_component_1 = require('./plant.component');
var flappy_component_1 = require('./flappy.component');
exports.ShareRoutes = [
    {
        path: '',
        redirectTo: '/fire',
        pathMatch: 'full'
    }, {
        path: 'fire',
        component: fire_component_1.FireComponent
    },
    {
        path: 'rain',
        component: rain_component_1.RainComponent
    },
    {
        path: 'war',
        component: star_component_1.StarComponent
    },
    {
        path: 'tree',
        component: tree_component_1.TreeComponent
    },
    {
        path: 'plant',
        component: plant_component_1.PlantComponent
    },
    {
        path: 'flappy',
        component: flappy_component_1.FlappyComponent
    }
];
exports.AppRoutes = router_1.RouterModule.forRoot(exports.ShareRoutes);
