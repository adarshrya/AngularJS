import { provideRouter, RouterConfig } from '@angular/router';
import { ShareRoutes } from './share.routes';
export const routes: RouterConfig = [
    ShareRoutes,
];

export const AppRoutes = [
    provideRouter(routes),
];
