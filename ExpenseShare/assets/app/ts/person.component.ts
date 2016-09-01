import { Component, OnInit, Input, } from '@angular/core';
import { PersonObj} from './person.type';
import { ShareObj} from './share.type';
import { ExpenseObj} from './expense.type';
import { ShareService }  from './share.service';
import { Router } from '@angular/router';

@Component({
    selector: 'person',
    templateUrl: 'app/html/person.component.html',
})
export class PersonComponent implements OnInit {
    sharing: ShareObj;
    person: PersonObj;

    constructor(private router: Router, private shareService: ShareService) {
    this.person=new PersonObj(0,"");
    }

    ngOnInit() {
        this.getShare();
    }

    getShare() {
        this.shareService.getShare().then(data => this.sharing = data as ShareObj);
    }

    AddPerson(person: PersonObj) {
        person.Expense=[];
        person.ID=this.sharing.Persons.length+1;
        this.sharing.Persons.push(person);       
        this.shareService.SaveShare(this.sharing).then(data =>
            this.gotoHome()
        );
    }
    gotoHome() {
        this.router.navigate(['']);
    }
}
