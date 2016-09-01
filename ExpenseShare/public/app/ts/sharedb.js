"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var share = [{
                id: 1, name: {
                    "Currency": "$",
                    "Persons": []
                }
            }];
        return { share: share };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
