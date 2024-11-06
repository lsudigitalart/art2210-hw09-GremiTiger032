let bug1;
let bug2;
let bug3;

function setup() {
  createCanvas(400, 400);
  background(403, 73, 300)

  bug1 = new Bug(color(random(255), random(255), random(255)));
  bug2 = new Bug(color(random(255), random(255), random(255)));
  bug3 = new Bug(color(random(255), random(255), random(255)));
  
}

function draw() {

  bug1.display();
  bug2.display();
  bug3.display();


}

function Bug(tempBugColor) {
  this.bugColor = tempBugColor;
  this.bugXposition = width/2;
  this.bugYposition = height/2;
  this.bugRadius = 10;

  this.display = function() {
    fill(this.bugColor);
    this.bugXposition = this.bugXposition + random(-30, 30);
    this.bugYposition = this.bugYposition + random(-30, 30);
    rect(this.bugXposition, this.bugYposition, this.bugRadius);

    
  }

  rect(0, 0, 70, 30, 4)

}