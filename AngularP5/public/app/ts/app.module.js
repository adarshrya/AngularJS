"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// Imports for loading & configuring the in-memory web api
var app_component_1 = require('./app.component');
var share_routes_1 = require('./share.routes');
var rain_component_1 = require('./rain.component');
var fire_component_1 = require('./fire.component');
var star_component_1 = require('./star.component');
var tree_component_1 = require('./tree.component');
var plant_component_1 = require('./plant.component');
var flappy_component_1 = require('./flappy.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                share_routes_1.AppRoutes,
                platform_browser_1.BrowserModule
            ],
            declarations: [
                app_component_1.AppComponent,
                rain_component_1.RainComponent,
                fire_component_1.FireComponent,
                star_component_1.StarComponent,
                tree_component_1.TreeComponent,
                plant_component_1.PlantComponent,
                flappy_component_1.FlappyComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
