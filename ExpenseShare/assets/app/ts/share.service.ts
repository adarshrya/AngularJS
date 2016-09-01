import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {PersonObj} from './person.type';
import {ShareObj} from './share.type';
import {ExpenseObj} from './expense.type';

@Injectable()
export class ShareService {
    private ShareUrl = 'app/share';
    constructor(private http: Http) { }

    getShare() {
        return this.http.get(this.ShareUrl)
            .toPromise()
            .then(response => (response.json().data[0] as Temp).name)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getCurrency() {
        return this.http.get(this.ShareUrl)
            .toPromise()
            .then(response => response.json().data as ShareObj)
            .catch(this.handleError);
    }

    SaveShare(Share: ShareObj) {
        let headers = new Headers();
        let temp=new Temp();
        temp.id=1;
        temp.name=Share;
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.ShareUrl+'/1', JSON.stringify(temp), { headers: headers })
            .toPromise()
            .then()
            .catch(this.handleError);
    }

}
export class Temp{
  id:number;
  name:ShareObj;
}
