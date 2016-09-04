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
var router_1 = require('@angular/router');
var report_type_1 = require('./report.type');
var ReportComponent = (function () {
    function ReportComponent(router, shareService) {
        this.router = router;
        this.shareService = shareService;
        this.report = [];
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.getShare();
    };
    ReportComponent.prototype.getShare = function () {
        var _this = this;
        this.shareService.getShare().then(function (data) { return _this.prepare(data); });
    };
    ReportComponent.prototype.prepare = function (data) {
        var _this = this;
        this.sharing = data;
        this.currency = this.sharing.Currency;
        for (var i = 0; i < this.sharing.Persons.length; i++) {
            if (this.sharing.Persons[i].Expense.length > 0) {
                this.report.push(new report_type_1.Report(this.sharing.Persons[i].Name));
            }
        }
        var _loop_1 = function(i) {
            var _loop_2 = function(x) {
                this_1.report.find(function (a) { return a.name == _this.sharing.Persons[i].Name; }).expense += Number(this_1.sharing.Persons[i].Expense[x].Ammount);
                var _loop_3 = function(y) {
                    this_1.TotalPart = 0;
                    for (var z = 0; z < this_1.sharing.Persons[i].Expense[x].NameShare.length; z++) {
                        this_1.TotalPart += this_1.sharing.Persons[i].Expense[x].NameShare[z].Myshare;
                    }
                    perpiece = this_1.sharing.Persons[i].Expense[x].Ammount / this_1.TotalPart;
                    this_1.report.find(function (a) { return a.name == _this.sharing.Persons[i].Expense[x].NameShare[y].Name; }).sharing += Number((this_1.sharing.Persons[i].Expense[x].NameShare[y].Myshare * perpiece).toFixed(2).toString());
                };
                for (var y = 0; y < this_1.sharing.Persons[i].Expense[x].NameShare.length; y++) {
                    _loop_3(y);
                }
            };
            for (var x = 0; x < this_1.sharing.Persons[i].Expense.length; x++) {
                _loop_2(x);
            }
        };
        var this_1 = this;
        var perpiece;
        for (var i = 0; i < this.sharing.Persons.length; i++) {
            _loop_1(i);
        }
        this.ProcessReport();
    };
    ReportComponent.prototype.ProcessReport = function () {
        for (var x = 0; x < this.report.length; x++) {
            if (this.report[x].expense > 0 && this.report[x].expense < this.report[x].sharing) {
                for (var y = 0; y < this.report.length; y++) {
                    if (this.report[y].expense > this.report[y].sharing) {
                        var amt = this.report[x].sharing - this.report[x].expense;
                        var amt2 = this.report[y].expense - this.report[y].sharing;
                        if (amt <= amt2) {
                            this.report[x].AddOwesTo(this.report[y].name, amt);
                            this.report[y].expense -= amt;
                            break;
                        }
                        else {
                            this.report[x].AddOwesTo(this.report[y].name, amt - amt2);
                            this.report[y].expense = 0;
                            this.report[y].name;
                        }
                    }
                }
                this.report[x].expense += this.report[x].sharing - this.report[x].expense;
            }
        }
    };
    ReportComponent.prototype.GetTotal = function () {
        var total = 0;
        this.report.forEach(function (element) {
            total += element.sharing;
        });
        return total.toFixed(2);
    };
    ReportComponent.prototype.GetOwes = function () {
        var ows = [];
        this.report.forEach(function (element) {
            element.OwesTo.forEach(function (element2) {
                ows.push({ name: element.name, owes: element2.Name, amount: element2.Myshare.toFixed(2) });
            });
        });
        return ows;
    };
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'report',
            templateUrl: 'app/html/report.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, share_service_1.ShareService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
