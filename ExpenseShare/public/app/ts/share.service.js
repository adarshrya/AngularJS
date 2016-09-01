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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ShareService = (function () {
    function ShareService(http) {
        this.http = http;
        this.ShareUrl = 'app/share';
    }
    ShareService.prototype.getShare = function () {
        return this.http.get(this.ShareUrl)
            .toPromise()
            .then(function (response) { return response.json().data[0].name; })
            .catch(this.handleError);
    };
    ShareService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ShareService.prototype.getCurrency = function () {
        return this.http.get(this.ShareUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ShareService.prototype.SaveShare = function (Share) {
        var headers = new http_1.Headers();
        var temp = new Temp();
        temp.id = 1;
        temp.name = Share;
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.ShareUrl + '/1', JSON.stringify(temp), { headers: headers })
            .toPromise()
            .then()
            .catch(this.handleError);
    };
    ShareService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ShareService);
    return ShareService;
}());
exports.ShareService = ShareService;
var Temp = (function () {
    function Temp() {
    }
    return Temp;
}());
exports.Temp = Temp;
