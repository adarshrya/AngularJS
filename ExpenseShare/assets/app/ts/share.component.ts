import { Component, OnInit  } from '@angular/core';
import { PersonObj} from './person.type';
import { ShareObj} from './share.type';
import { ExpenseObj} from './expense.type';
import { ShareService }  from './share.service';

@Component({
    selector: 'share',
    templateUrl: 'app/html/share.component.html',
})
export class ShareComponent implements OnInit {
    sharing: ShareObj;
    hide = true;
    constructor(private shareService: ShareService) {

    }

    ngOnInit() {
        this.getShare();
    }

    getShare() {
        this.shareService
            .getShare()
            .then(heroes => this.sharing = heroes as ShareObj);
    }

    GetPersonNames()
    {
      var x;
      x=[];
      for (let i = 0; i < this.sharing.Persons.length; i++) {
      x.push(this.sharing.Persons[i].Name);
      }
      return x;
    }
}
