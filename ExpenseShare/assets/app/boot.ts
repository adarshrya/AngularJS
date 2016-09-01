///<reference path="../../typings.d.ts"/>
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './ts/app.module';
import { enableProdMode } from '@angular/core';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
