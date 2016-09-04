import { Component, AfterContentInit  } from '@angular/core';

@Component({
    selector: 'rain',
    template: '<div class="card"><div class="card-block" id="rain"><h4 class="card-title">Its Raining</h4></div></div>'
})

export class RainComponent implements AfterContentInit  {

    ngAfterContentInit() {

        var myp5 = new p5(rain);

    }
}

  declare var p5: any;
  declare var rain: any;
