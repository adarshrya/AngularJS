var fire = function(p) {

    var fireworks = [];
    var gravity;

    p.setup = function() {
        p.createCanvas(500, 400).parent('fire');
        p.colorMode(p.HSB);
        gravity = p.createVector(0, 0.2);
        p.stroke(255);
        p.strokeWeight(4);

        p.background(0);
    }

    p.draw = function() {
        p.colorMode(p.RGB);
        p.background(0, 25);
        if (p.random(1) < 0.02) {
            fireworks.push(new Firework());
        }
        for (var i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show();
            if (fireworks[i].done()) {
                fireworks.splice(i, 1);
            }
        }
    }

    function Firework() {

        this.hu = p.random(255);
        this.firework = new Particle(p.random(p.width), p.height, this.hu, true);
        this.exploded = false;
        this.particles = []
        this.update = function() {
            if (!this.exploded) {
                this.firework.appyForce(gravity);
                this.firework.update();
                if (this.firework.vel.y >= 0) {
                    this.exploded = true;
                    this.explode();
                }
            }
            for (var i = this.particles.length - 1; i >= 0; i--) {
                this.particles[i].appyForce(gravity);
                this.particles[i].update();
                if (this.particles[i].done()) {
                    this.particles.splice(i, 1);
                }
            }
        }

        this.show = function() {
            if (!this.exploded) {
                this.firework.show();
            }
            for (var i = 0; i < this.particles.length; i++) {
                this.particles[i].show();
            }

        }

        this.explode = function() {
            for (var i = 0; i < 100; i++) {
                var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
                this.particles.push(p);
            }
        }

        this.done = function() {

            if (this.exploded && this.particles.length == 0) {
                return true;
            } else {
                return false;

            }
        }

    }

    function Particle(x, y, hu, firework) {

        this.pos = p.createVector(x, y);
        this.firework = firework;
        this.lifespan = 255;
        this.hu = hu;
        if (firework) {
            this.vel = p.createVector(0, p.random(-12, -8));
        } else {
            this.vel = p5.Vector.random2D();
            this.vel.mult(p.random(2, 10));
        }

        this.acc = p.createVector(0, 0);
        this.appyForce = function(force) {
            this.acc.add(force);

        }
        this.update = function() {
            if (!this.firework) {
                this.vel.mult(0.9);
                this.lifespan -= 4;
            }
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }

        this.show = function() {
            p.colorMode(p.HSB);
            if (!this.firework) {
                p.strokeWeight(2);
                p.stroke(this.hu, 255, 255, this.lifespan);
            } else {
                p.strokeWeight(4);
                p.stroke(this.hu, 255, 255);
            }
            p.point(this.pos.x, this.pos.y)
        }

        this.done = function() {

            if (this.lifespan < 0) {
                return true;
            } else {
                return false;

            }
        }
    }
}
