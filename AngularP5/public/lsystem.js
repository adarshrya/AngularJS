var tree = function(p) {

    var axiom = "F";
    var sentence = axiom;
    var rule = [];
    var len = 100;
    var angle = 0;
    rule[0] = {
        a: "F",
        b: "FF-[+F-F-F]+[-F+F+F]+[+F-F-F]-[-F+F]"
    }

    function generate() {
        var newsentence = "";
        len *= 0.6;
        for (var i = 0; i < sentence.length; i++) {
            var current = sentence.charAt(i);
            for (var x = 0; x < rule.length; x++) {
                if (current == rule[x].a) {
                    newsentence += rule[x].b;
                } else {
                    newsentence += current;
                }
            }
        }
        sentence = newsentence;
        turtle();
    }

    function turtle() {
        p.background(200);
        p.translate(p.width / 2, p.height)

        for (var i = 0; i < sentence.length; i++) {
            var current = sentence.charAt(i);
            var r = p.round(p.random(1, 255));
            var g = p.round(p.random(1, 255));
            var b = p.round(p.random(1, 255));

            p.stroke('rgba(' + r + ',' + g + ',' + b + ',0.60)');
            //stroke('white');
            if (current == "F") {
                p.line(0, 0, 0, -len);
                p.translate(0, -len);
            } else if (current == "+") {
                p.rotate(angle);
            } else if (current == "-") {
                p.rotate(-angle);
            } else if (current == "[") {
                p.push()
            } else if (current == "]") {
                p.pop()
            }
        }
    }

    p.setup = function() {
        p.createCanvas(600, 600).parent('ls');
        p.background(51);
        angle = p.radians(20);
        turtle();
        var button = p.createButton("Generate").parent('gen');
        button.addClass('btn btn-primary');
                button.mousePressed(generate);
    }
}
