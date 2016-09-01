import { Component, OnInit, Input, } from '@angular/core';
import { PersonObj} from './person.type';
import { ShareObj} from './share.type';
import { ExpenseObj} from './expense.type';
import { ShareService }  from './share.service';
import { Router } from '@angular/router';

@Component({
    selector: 'export',
    templateUrl: 'app/html/export.component.html',
})
export class ExportComponent implements OnInit {
    sharing: ShareObj;
    myjson:string;

    constructor(private router: Router, private shareService: ShareService) {

    }

    ngOnInit() {
        this.getShare();
    }

    getShare() {
        this.shareService.getShare().then(data => this.myjson = JSON.stringify(data));
    }

}
