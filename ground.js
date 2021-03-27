class Ground {
    constructor(x, y, width ) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width,20, options);
        this.x = x;
        this.y = y;
        this.width = width;
      
        World.add(world, this.body);
    }
    display() {
        fill("black");
        var pos = this.body.position;
        rect(pos.x, pos.y, this.width, 20);
    }
}
