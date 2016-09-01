import { Component, OnInit, Input, } from '@angular/core';
import { PersonObj} from './person.type';
import { ShareObj} from './share.type';
import { ExpenseObj} from './expense.type';
import { ShareService }  from './share.service';
import { Router } from '@angular/router';
import {Report}  from './report.type';
@Component({
    selector: 'report',
    templateUrl: 'app/html/report.component.html',
})

export class ReportComponent implements OnInit {
    sharing: ShareObj;
    report: Array<Report>;
    TotalPart: number;
    currency: string;
    constructor(private router: Router, private shareService: ShareService) {
        this.report = [];
    }

    ngOnInit() {
        this.getShare();
    }

    getShare() {
        this.shareService.getShare().then(data => this.prepare(data));
    }

    prepare(data: ShareObj) {
        this.sharing = data;
        this.currency = this.sharing.Currency;
        for (let i = 0; i < this.sharing.Persons.length; i++) {
            if (this.sharing.Persons[i].Expense.length > 0) {
                this.report.push(new Report(this.sharing.Persons[i].Name));
            }
        }

        for (let i = 0; i < this.sharing.Persons.length; i++) {

            for (let x = 0; x < this.sharing.Persons[i].Expense.length; x++) {
                this.report.find(a => a.name == this.sharing.Persons[i].Name).expense += Number(this.sharing.Persons[i].Expense[x].Ammount);

                for (let y = 0; y < this.sharing.Persons[i].Expense[x].NameShare.length; y++) {
                    this.TotalPart = 0;
                    for (let z = 0; z < this.sharing.Persons[i].Expense[x].NameShare.length; z++) {
                        this.TotalPart += this.sharing.Persons[i].Expense[x].NameShare[z].Myshare;
                    }
                    var perpiece = this.sharing.Persons[i].Expense[x].Ammount / this.TotalPart;
                    this.report.find(a => a.name == this.sharing.Persons[i].Expense[x].NameShare[y].Name).sharing += Number((this.sharing.Persons[i].Expense[x].NameShare[y].Myshare * perpiece).toFixed(2).toString());

                }
            }
        }
        this.ProcessReport();
    }

    ProcessReport() {
        for (let x = 0; x < this.report.length; x++) {
            if (this.report[x].expense > 0 && this.report[x].expense < this.report[x].sharing) {
                for (let y = 0; y < this.report.length; y++) {
                    if (this.report[y].expense > this.report[y].sharing) {
                        let amt = this.report[x].sharing - this.report[x].expense;
                        let amt2 = this.report[y].expense - this.report[y].sharing;
                        if (amt <= amt2) {
                            this.report[x].AddOwesTo(this.report[y].name, amt);
                            this.report[y].expense -= amt;
                            break;
                        }
                        else {
                            this.report[x].AddOwesTo(this.report[y].name, amt - amt2);
                            this.report[y].expense = 0;
                            this.report[y].name;
                        }
                    }
                }
                this.report[x].expense += this.report[x].sharing - this.report[x].expense;
            }
        }
       

    }

    GetTotal() {
        var total = 0;
        this.report.forEach(element => {
            total += element.sharing;
        });
        return total.toFixed(2);
    }

    GetOwes() {
        var ows = [];
        this.report.forEach(element => {
            element.OwesTo.forEach(element2 => {
                ows.push({ name: element.name, owes: element2.Name, amount: element2.Myshare.toFixed(2) });
            });
        });
        return ows;
    }
}
