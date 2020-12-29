class Rope{
        
        constructor(bodyA,bodyB,offsetX){
    //ADDED OFFSETx AND OFFSETY
            var options={
             bodyA:bodyA,
             bodyB:bodyB,
             pointB:{x:offsetX, y:0}
         }
          /*OFFSETY I MADE IT AS 0 AND USINF XOFFSET 
        AND CREATING A LINK BETWEEN ROPE AND BOB*/
         this.offsetX=offsetX
         this.offsetY=0
         
             this.rope=Constraint.create(options)
             
             World.add(world,this.rope)
             
       
       
        }

    display(){
        /*INSTEAD OF THIS ANGRYBIRD CODES I HAVE JUST CREATED SIMPLE SINGLE LINE
        BECAUSE WE DOESNOT NEED TWO ROPES LIKE ANGRY BIRD, 
        JUST NEED SINGLE ROPE BETWEEN ROPE AND BOB*/
        /*if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48, 22, 8)
            if(pointA.x<220){  
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-3);
        }
        else{
            line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y-3);
            
        }*/
        //SIMPLE LINE
        stroke("black")
        strokeWeight(2);
        var posA=this.rope.bodyA.position
        var posB=this.rope.bodyB.position
        line(posA.x,posA.y,posB.x+this.offsetX,posB.y);

    }
}
