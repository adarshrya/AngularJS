import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './Sharedb';

import { AppComponent } from './app.component';
import { AppRoutes} from './share.routes';

import { ShareComponent } from './share.component';
import {CurrencyComponent} from './currency.component';
import { ShareService }  from './share.service';

import {PersonComponent} from './person.component';
import {ExpenseComponent} from './expense.component';

import {ReportComponent} from './report.component';

import {ExportComponent} from './export.component';
@NgModule({
    imports: [
        AppRoutes,
        HttpModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ShareComponent,
        CurrencyComponent,
        PersonComponent,
        ExpenseComponent,
        ReportComponent,
        ExportComponent
    ],
    providers: [
        ShareService,
        { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        { provide: SEED_DATA, useClass: InMemoryDataService }     // in-mem server data
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
