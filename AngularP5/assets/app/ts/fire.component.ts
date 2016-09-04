import { Component, AfterContentInit  } from '@angular/core';

@Component({
    selector: 'fire',
    template: '<div class="card"><div class="card-block" id="fire"><h4 class="card-title">Fire Works</h4></div></div>'
})


export class FireComponent implements AfterContentInit  {

    ngAfterContentInit() {

        var myp5 = new p5(fire);

    }
}

  declare var p5: any;
  declare var fire: any;
