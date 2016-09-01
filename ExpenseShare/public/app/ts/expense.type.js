"use strict";
var ExpenseObj = (function () {
    function ExpenseObj(id, name, ammount, myshare, description) {
        this.ID = id;
        this.Name = name;
        this.Ammount = ammount;
        this.Myshare = myshare;
        this.NameShare = [];
        this.Description = description;
    }
    ExpenseObj.prototype.AddSharing = function (name, myshare) {
        this.NameShare.push(new NamePartObj(name, myshare));
    };
    ExpenseObj.prototype.SumTotalPart = function () {
        this.TotalPart = 0;
        for (var i = 0; i < this.NameShare.length; i++) {
            this.TotalPart += this.NameShare[i].Myshare;
        }
        return this.TotalPart;
    };
    return ExpenseObj;
}());
exports.ExpenseObj = ExpenseObj;
var NamePartObj = (function () {
    function NamePartObj(name, myshare) {
        this.Name = name;
        this.Myshare = myshare;
    }
    return NamePartObj;
}());
exports.NamePartObj = NamePartObj;
