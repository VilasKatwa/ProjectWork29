class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }


    display(c){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      noStroke();
      if (c){
        fill(c);
      } else {
        noFill()
      }
      
      rect(0, 0, this.width, this.height);
      pop();

    }
  };