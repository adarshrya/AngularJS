import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

// Imports for loading & configuring the in-memory web api
import { AppComponent } from './app.component';
import { AppRoutes} from './share.routes';
import { RainComponent} from './rain.component';
import { FireComponent} from './fire.component';
import { StarComponent} from './star.component';
import { TreeComponent} from './tree.component';
import { PlantComponent} from './plant.component';
import { FlappyComponent} from './flappy.component';


@NgModule({
    imports: [
        AppRoutes,
        BrowserModule
    ],
    declarations: [
        AppComponent,
        RainComponent,
        FireComponent,
        StarComponent,
        TreeComponent,
        PlantComponent,
        FlappyComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
