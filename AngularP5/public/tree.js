var plant=function(p){
var angle = 0;

p.setup=function() {
    p.createCanvas(400, 400).parent('tree');
    slider = p.createSlider(0, p.TWO_PI, p.PI / 4, 0.01).parent('slide');
    p.createP('Grow a tree').parent('slide');
}

p.draw=function() {
    p.background(51);
    p.stroke(255);
    angle = slider.value();
    p.translate(200, p.height);
    branch(100);
}

function branch(len) {
    p.line(0, 0, 0, -len);
    p.translate(0, -len);
    if (len > 4) {
        p.push();
        p.rotate(angle);
        branch(len * 0.67);
        p.pop();
        p.push();
        p.rotate(-angle);
        branch(len * 0.67);
        p.pop();
    }
}
}
