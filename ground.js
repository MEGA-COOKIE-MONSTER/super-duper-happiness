class Ground 
{
  constructor(x, y, w, h, options) 
  {
    let optionS = options
    
    this.body = Bodies.rectangle(x, y, w, h, optionS);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;

    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
}