import { Component, AfterContentInit  } from '@angular/core';

@Component({
    selector: 'flappy',
    template: '<div class="card"><div class="card-block" id="flappy"> <h4 class="card-title">Flappy Works</h4></div></div>'
})

export class FlappyComponent implements AfterContentInit  {

    ngAfterContentInit() {

        var myp5 = new p5(flappy);

    }
}

  declare var p5: any;
  declare var flappy: any;
