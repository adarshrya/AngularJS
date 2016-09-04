import { Component, AfterContentInit  } from '@angular/core';

@Component({
    selector: 'star',
    template: '<div class="card"><div class="card-block" id="war"><h4 class="card-title">May the 4th be with you</h4></div></div>'
})

export class StarComponent implements AfterContentInit  {

    ngAfterContentInit() {

        var myp5 = new p5(war);

    }
}

  declare var p5: any;
  declare var war: any;
