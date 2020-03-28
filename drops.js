class    Drops {
    constructor(x,y)    {
        var options =  {
            isStatic: false
        }
        this.image = loadImage("raindrop.png.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w =3;
        this.h = 3;     
        World.add(world,this.body);
      
    }
    display()  {
        var pos =this.body.position;
        imageMode(CENTER);        
        image(this.image, 200, 200, this.width = 15, this.height = 25);
        
       // rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
       
    }
}