import { Component, OnInit, Input, } from '@angular/core';
import { PersonObj} from './person.type';
import { ShareObj} from './share.type';
import { ExpenseObj} from './expense.type';
import { ShareService }  from './share.service';
import { Router } from '@angular/router';

@Component({
    selector: 'expense',
    templateUrl: 'app/html/expense.component.html',
})

export class ExpenseComponent implements OnInit {
    sharing: ShareObj;
    expense: ExpenseObj;

    constructor(private router: Router, private shareService: ShareService) {
        this.expense = new ExpenseObj(NaN, "", NaN, NaN, "");

    }

    ngOnInit() {
        this.getShare();
    }

    getShare() {
        this.shareService.getShare().then(data => this.prepare(data));
    }

    prepare(data: ShareObj) {
        this.sharing = data;
        for (var x = 0; x < this.sharing.Persons.length; x++) {
            this.expense.AddSharing(this.sharing.Persons[x].Name, 0);

        }
    }

    addExpense(expense: ExpenseObj) {
        try {
            expense.ID = this.sharing.Persons.find(a => a.Name == this.expense.Name).Expense.length + 1;
            this.sharing.Persons.find(a => a.Name == this.expense.Name).Expense.push(expense);
            this.shareService.SaveShare(this.sharing).then(data =>
                this.gotoHome()
            );
        } catch (error) {
            console.log(error);

        }

    }
    setName(value) {
        //if you're on older versions of ES, use for-in instead


        this.expense.Name = value;
    }

    gotoHome() {
        this.router.navigate(['']);
    }
}
