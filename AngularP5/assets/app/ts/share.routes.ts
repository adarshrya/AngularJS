import { Routes, RouterModule } from '@angular/router';
import {FireComponent} from './fire.component'
import {RainComponent} from './rain.component'
import {StarComponent} from './star.component'
import {TreeComponent} from './tree.component'
import { PlantComponent} from './plant.component';
import { FlappyComponent} from './flappy.component';


export const ShareRoutes: Routes = [
    {
        path: '',
        redirectTo: '/fire',
        pathMatch: 'full'
    }, {
        path: 'fire',
        component: FireComponent
    },
    {
        path: 'rain',
        component: RainComponent
    }
    ,
    {
        path: 'war',
        component: StarComponent
    },
    {
      path: 'tree',
      component:TreeComponent
    },
    {
      path: 'plant',
      component:PlantComponent
    },
    {
      path: 'flappy',
      component:FlappyComponent
    }

];

export const AppRoutes = RouterModule.forRoot(ShareRoutes);
