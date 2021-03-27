class Tree {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.widht = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        fill("blue");
        var pos = this.body.position;
        rect(pos.x, pos.y, this.width, this.height);
    }
}
