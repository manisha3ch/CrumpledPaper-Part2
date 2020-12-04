class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.bottombody = Bodies.rectangle(x,y,width,height,options);
        this.leftWallbody = Bodies.rectangle(x-50, y-45,height,width,options);
        this.rightWallbody = Bodies.rectangle(x+50, y-45,height,width,options);
        this.wd = width;
        this.ht = height;
        this.image= loadImage("dustbingreen.png");
        World.add(myWorld,[this.bottombody,this.leftWallbody,this.rightWallbody]);
    }
    display(){
        var bottompos = this.bottombody.position;
        var leftWallpos = this.leftWallbody.position;
        var rightWallpos = this.rightWallbody.position;
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,bottompos.x,bottompos.y-45,this.wd,this.wd,);
    }
}