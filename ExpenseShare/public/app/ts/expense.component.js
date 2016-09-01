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
var expense_type_1 = require('./expense.type');
var share_service_1 = require('./share.service');
var router_1 = require('@angular/router');
var ExpenseComponent = (function () {
    function ExpenseComponent(router, shareService) {
        this.router = router;
        this.shareService = shareService;
        this.expense = new expense_type_1.ExpenseObj(NaN, "", NaN, NaN, "");
    }
    ExpenseComponent.prototype.ngOnInit = function () {
        this.getShare();
    };
    ExpenseComponent.prototype.getShare = function () {
        var _this = this;
        this.shareService.getShare().then(function (data) { return _this.prepare(data); });
    };
    ExpenseComponent.prototype.prepare = function (data) {
        this.sharing = data;
        for (var x = 0; x < this.sharing.Persons.length; x++) {
            this.expense.AddSharing(this.sharing.Persons[x].Name, 0);
        }
    };
    ExpenseComponent.prototype.addExpense = function (expense) {
        var _this = this;
        try {
            expense.ID = this.sharing.Persons.find(function (a) { return a.Name == _this.expense.Name; }).Expense.length + 1;
            this.sharing.Persons.find(function (a) { return a.Name == _this.expense.Name; }).Expense.push(expense);
            this.shareService.SaveShare(this.sharing).then(function (data) {
                return _this.gotoHome();
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    ExpenseComponent.prototype.setName = function (value) {
        //if you're on older versions of ES, use for-in instead
        this.expense.Name = value;
    };
    ExpenseComponent.prototype.gotoHome = function () {
        this.router.navigate(['']);
    };
    ExpenseComponent = __decorate([
        core_1.Component({
            selector: 'expense',
            templateUrl: 'app/html/expense.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, share_service_1.ShareService])
    ], ExpenseComponent);
    return ExpenseComponent;
}());
exports.ExpenseComponent = ExpenseComponent;
