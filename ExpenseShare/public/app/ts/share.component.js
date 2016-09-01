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
var share_service_1 = require('./share.service');
var ShareComponent = (function () {
    function ShareComponent(shareService) {
        this.shareService = shareService;
        this.hide = true;
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.getShare();
    };
    ShareComponent.prototype.getShare = function () {
        var _this = this;
        this.shareService
            .getShare()
            .then(function (heroes) { return _this.sharing = heroes; });
    };
    ShareComponent.prototype.GetPersonNames = function () {
        var x;
        x = [];
        for (var i = 0; i < this.sharing.Persons.length; i++) {
            x.push(this.sharing.Persons[i].Name);
        }
        return x;
    };
    ShareComponent = __decorate([
        core_1.Component({
            selector: 'share',
            templateUrl: 'app/html/share.component.html',
        }), 
        __metadata('design:paramtypes', [share_service_1.ShareService])
    ], ShareComponent);
    return ShareComponent;
}());
exports.ShareComponent = ShareComponent;
