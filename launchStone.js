class LaunchStone {
    constructor(stoneBody, handPoint) {
        var options = {
            bodyA: stoneBody,
            pointB: handPoint,
            stiffness: 0.04,
            length: 100
        }
        this.pointB = handPoint;
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }
    fly() {
        this.shot.bodyA = null;
    }
    display() {
        if (this.shot.bodyA) {


            var pointA = this.shot.bodyA.position;
            var pointB = this.pointB;
           
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}