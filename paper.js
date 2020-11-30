class Paper {
    constructor(x,y,r)
    {

        var paper_options={
            isStatic:false,
            restitution:0.3,
            friction: 0.5,
            density:1.2,
        }

        this.x=x;
        this.y=y;
        this.r=r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,paper_options);
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }

    display()   {
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}