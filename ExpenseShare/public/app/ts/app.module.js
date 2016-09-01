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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
// Imports for loading & configuring the in-memory web api
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var Sharedb_1 = require('./Sharedb');
var app_component_1 = require('./app.component');
var share_routes_1 = require('./share.routes');
var share_component_1 = require('./share.component');
var currency_component_1 = require('./currency.component');
var share_service_1 = require('./share.service');
var person_component_1 = require('./person.component');
var expense_component_1 = require('./expense.component');
var report_component_1 = require('./report.component');
var export_component_1 = require('./export.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                share_routes_1.AppRoutes,
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                share_component_1.ShareComponent,
                currency_component_1.CurrencyComponent,
                person_component_1.PersonComponent,
                expense_component_1.ExpenseComponent,
                report_component_1.ReportComponent,
                export_component_1.ExportComponent
            ],
            providers: [
                share_service_1.ShareService,
                { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
                { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: Sharedb_1.InMemoryDataService } // in-mem server data
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
