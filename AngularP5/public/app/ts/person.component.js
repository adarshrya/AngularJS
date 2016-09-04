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
var person_type_1 = require('./person.type');
var share_service_1 = require('./share.service');
var router_1 = require('@angular/router');
var PersonComponent = (function () {
    function PersonComponent(router, shareService) {
        this.router = router;
        this.shareService = shareService;
        this.person = new person_type_1.PersonObj(0, "");
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.getShare();
    };
    PersonComponent.prototype.getShare = function () {
        var _this = this;
        this.shareService.getShare().then(function (data) { return _this.sharing = data; });
    };
    PersonComponent.prototype.AddPerson = function (person) {
        var _this = this;
        person.Expense = [];
        person.ID = this.sharing.Persons.length + 1;
        this.sharing.Persons.push(person);
        this.shareService.SaveShare(this.sharing).then(function (data) {
            return _this.gotoHome();
        });
    };
    PersonComponent.prototype.gotoHome = function () {
        this.router.navigate(['']);
    };
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'person',
            templateUrl: 'app/html/person.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, share_service_1.ShareService])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
