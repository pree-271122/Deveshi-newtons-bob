class bob
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            //'isStatic':true,
            'friction':0.3,
            'density':0.4
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        
        World.add(world,this.body);
        
    }

    display()
    {
       
        
        fill("magenta");
        
       ellipseMode(RADIUS);
       // IF YOU USE ONLY THIS.X , BOBS ARE NOT MOVING ALONG WITH THE ROPE
       // ellipse(this.x,this.y,this.r,this.r);
       //if you give body.position the bob will be moving along with the rope.
       ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        
    }
}