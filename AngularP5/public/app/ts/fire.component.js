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
var FireComponent = (function () {
    function FireComponent() {
    }
    FireComponent.prototype.ngAfterContentInit = function () {
        var myp5 = new p5(fire);
    };
    FireComponent = __decorate([
        core_1.Component({
            selector: 'fire',
            template: '<div class="card"><div class="card-block" id="fire"><h4 class="card-title">Fire Works</h4></div></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], FireComponent);
    return FireComponent;
}());
exports.FireComponent = FireComponent;
