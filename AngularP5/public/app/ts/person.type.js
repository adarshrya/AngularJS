"use strict";
var PersonObj = (function () {
    function PersonObj(id, name) {
        this.Name = name;
        this.ID = id;
        this.Expense = [];
    }
    PersonObj.prototype.addExpense = function (E) {
        this.Expense.push(E);
    };
    return PersonObj;
}());
exports.PersonObj = PersonObj;
