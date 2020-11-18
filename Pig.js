class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;//visiblity 0 means completly vanished and 255 means completly visible
  }
  display(){
    console.log(this.body.speed);//checking on console the speed of pig when the bird hits it
    if(this.body.speed<3){//if the speed is <3 that means the  bird has not hited
      super.display();//so display the pig
    }
    else{//if speed is more than 3
      World.remove(world,this.body);//remove the pig from the world
      push();//so that only the pig fades
      this.Visiblity=this.Visiblity-5;//subtreact 5 from visiblity till it becomes 0
      tint(255,this.Visiblity);//to create fading effect
      image(this.image,this.body.position.x,this.body.position.y,50,50);// to create fading effect
      pop();
        }
    
  }


}