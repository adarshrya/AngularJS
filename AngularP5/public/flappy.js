var flappy = function(p) {
    var bird;
    var pipes = [];

    p.setup = function() {
        p.createCanvas(400, 600).parent('flappy');
        bird = new Bird();
        pipes.push(new Pipe());
    }

    p.draw = function() {
        p.background(0);
        for (var i = pipes.length - 1; i >= 0; i--) {
            pipes[i].show();
            pipes[i].update();
            if (pipes[i].hits(bird)) {

            }
            if (pipes[i].offScreen()) {
                pipes.splice(i, 1);
            }
        }
        bird.update();
        bird.show();


        if (p.frameCount % 120 == 0) {
            pipes.push(new Pipe());
        }

    }

    p.keyPressed = function() {
        if (p.key == ' ') {
            bird.up();
        }
    }

    function Bird() {
        this.y = p.height / 2;
        this.x = 64;
        this.gravity = 0.06;
        this.lift = -15;
        this.velocity = 0;
        this.show = function() {
            p.fill(255);
            p.ellipse(this.x, this.y, 16, 16);
        }

        this.up = function() {
            this.velocity += this.lift;
        }

        this.update = function() {
            this.velocity += this.gravity;
            this.velocity += 0.9;
            this.y += this.velocity;
            if (this.y > p.height) {
                this.y = p.height;
                this.velocity = 0;
            }

            if (this.y < 0) {
                this.y = 0;
                this.velocity = 0;
            }
        }
    }

    function Pipe() {
        this.top = p.random(p.height / 2);
        this.bottom = p.random(p.height / 2);
        this.x = p.width;
        this.w = 20;
        this.speed = 1;
        this.highlight = false;

        this.show = function() {
            p.fill(255);
            if (this.highlight) {
                p.fill(255, 0, 0);
            }
            p.rect(this.x, 0, this.w, this.top);
            p.rect(this.x, p.height - this.bottom, this.w, this.bottom);
        }
        this.update = function() {
            this.x -= this.speed;
        }

        this.offScreen = function() {
            if (this.x < -this.w) {
                return true;
            } else {
                return false;
            }
        }
        this.hits = function(bird) {
            if ((bird.y < this.top || bird.y > p.height - this.bottom) && (bird.x > this.x && bird.x < this.x + this.w)) {
                this.highlight = true;
                return true;
            } else {
                return false;
            }
        }


    }
}
