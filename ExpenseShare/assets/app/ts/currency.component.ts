import { Component, OnInit, Input, } from '@angular/core';
import { PersonObj} from './person.type';
import { ShareObj} from './share.type';
import { ExpenseObj} from './expense.type';
import { ShareService }  from './share.service';
import { Router } from '@angular/router';

@Component({
    selector: 'currency',
    templateUrl: 'app/html/currency.component.html',
})
export class CurrencyComponent implements OnInit {
    sharing: ShareObj;

    constructor(private router: Router, private shareService: ShareService) {
    }

    ngOnInit() {
        this.getCurrency();
    }

    getCurrency() {
        this.shareService.getShare().then(data =>  this.sharing = data as ShareObj);
    }

    setCurrency() {
        this.shareService.SaveShare(this.sharing).then(data =>
            this.gotoHome()
        );
    }
    gotoHome() {
        this.router.navigate(['']);
    }
}
