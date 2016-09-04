import { Component, AfterContentInit  } from '@angular/core';

@Component({
    selector: 'tree',
    template: '<div class="card"><div class="card-block"><h4 class="card-title">L-system rules</h4><div id="ls"></div><br><div id="gen"></div></div>'
})


export class TreeComponent implements AfterContentInit  {

    ngAfterContentInit() {

        var myp5 = new p5(tree);

    }
}

  declare var p5: any;
  declare var tree: any;
