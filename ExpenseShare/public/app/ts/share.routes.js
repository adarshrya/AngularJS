"use strict";
var router_1 = require('@angular/router');
var share_component_1 = require('./share.component');
var currency_component_1 = require('./currency.component');
var person_component_1 = require('./person.component');
var expense_component_1 = require('./expense.component');
var report_component_1 = require('./report.component');
var export_component_1 = require('./export.component');
exports.ShareRoutes = [
    {
        path: '',
        redirectTo: '/share',
        pathMatch: 'full'
    }, {
        path: 'share',
        component: share_component_1.ShareComponent
    },
    {
        path: 'currency',
        component: currency_component_1.CurrencyComponent
    },
    {
        path: 'person',
        component: person_component_1.PersonComponent
    },
    {
        path: 'expense',
        component: expense_component_1.ExpenseComponent
    },
    {
        path: 'report',
        component: report_component_1.ReportComponent
    },
    {
        path: 'export',
        component: export_component_1.ExportComponent
    }
];
exports.AppRoutes = router_1.RouterModule.forRoot(exports.ShareRoutes);
