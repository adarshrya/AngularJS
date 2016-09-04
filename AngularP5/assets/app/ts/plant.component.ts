import { Component, AfterContentInit  } from '@angular/core';

@Component({
    selector: 'plant',
    template: '<div class="card"><div class="card-block" id="rain"><h4 class="card-title">A Tree</h4><div id="tree"></div><br><div id="slide"></div></div></div>'
})

export class PlantComponent implements AfterContentInit  {

    ngAfterContentInit() {

        var myp5 = new p5(plant);

    }
}

  declare var p5: any;
  declare var plant: any;
