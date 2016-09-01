"use strict";
var Report = (function () {
    function Report(name) {
        this.name = name;
        this.sharing = 0;
        this.expense = 0;
        this.OwesTo = [];
    }
    Report.prototype.AddOwesTo = function (name, amount) {
        this.OwesTo.push(new NamePartObj(name, amount));
    };
    return Report;
}());
exports.Report = Report;
var NamePartObj = (function () {
    function NamePartObj(name, myshare) {
        this.Name = name;
        this.Myshare = myshare;
    }
    return NamePartObj;
}());
exports.NamePartObj = NamePartObj;
