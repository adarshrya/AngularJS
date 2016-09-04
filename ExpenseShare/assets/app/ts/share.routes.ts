import { Routes, RouterModule } from '@angular/router';
import {ShareComponent} from './share.component';
import {CurrencyComponent} from './currency.component';
import {PersonComponent} from './person.component';
import {ExpenseComponent} from './expense.component';
import {ReportComponent} from './report.component';
import {ExportComponent} from './export.component';
export const ShareRoutes: Routes = [
    {
        path: '',
        redirectTo: '/share',
        pathMatch: 'full'
    }, {
        path: 'share',
        component: ShareComponent
    }
    , {
        path: 'currency',
        component: CurrencyComponent
    }
    , {
        path: 'person',
        component: PersonComponent
    }
    , {
        path: 'expense',
        component: ExpenseComponent
    }
    , {
        path: 'report',
        component: ReportComponent
    }
    , {
        path: 'export',
        component: ExportComponent
    }
];

export const AppRoutes = RouterModule.forRoot(ShareRoutes);
