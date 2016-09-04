var war=function(p){
var stars = []

var speed;

p.setup=function() {
  p.createCanvas(600, 600).parent('war');
  for (var i = 0; i < 100; i++) {
    stars[i] = new Star();
  }
}

p.draw=function() {
  speed = p.map(p.mouseX, 0, p.width, 0, 50);
  p.background(0);
  p.translate(p.width / 2, p.height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function Star() {
  this.x = p.random(-p.width, p.width);
  this.y = p.random(-p.height, p.height);
  this.z = p.random(p.width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = p.width;
      this.x = p.random(-p.width, p.width);
      this.y = p.random(-p.height, p.height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    p.fill(255);
    p.noStroke();

    var sx = p.map(this.x / this.z, 0, 1, 0, p.width);
    var sy = p.map(this.y / this.z, 0, 1, 0, p.height);

    var r = p.map(this.z, 0, p.width, 16, 0);
    p.ellipse(sx, sy, r, r);

    var px = p.map(this.x / this.pz, 0, 1, 0, p.width);
    var py = p.map(this.y / this.pz, 0, 1, 0, p.height);

    this.pz = this.z;

    p.stroke(255);
    p.line(px, py, sx, sy);

  }
}
}
