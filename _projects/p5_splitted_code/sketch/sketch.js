var system;

function setup() {
  var canvas = createCanvas(720, 400);
  canvas.parent('sketch-holder');
  system = new ParticleSystem(createVector(width/2, 50));
}

function draw() {
  background(51);
  system.addParticle();
  system.run();
}
