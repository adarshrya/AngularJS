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
var PlantComponent = (function () {
    function PlantComponent() {
    }
    PlantComponent.prototype.ngAfterContentInit = function () {
        var myp5 = new p5(plant);
    };
    PlantComponent = __decorate([
        core_1.Component({
            selector: 'plant',
            template: '<div class="card"><div class="card-block" id="rain"><h4 class="card-title">A Tree</h4><div id="tree"></div><br><div id="slide"></div></div></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], PlantComponent);
    return PlantComponent;
}());
exports.PlantComponent = PlantComponent;
