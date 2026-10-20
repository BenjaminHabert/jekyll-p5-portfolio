/* Entrar al flujo */
/* Fuentes audio-visuales: 
Sonido: Dick Higgins - Omnia Gallia (1980)
Videoarte: Jeff Perkins - Shout (1966)
Video del público: extracción desde FLuXuS Internationale FesTsPiELe NEUEsTER MUSiK" (Wiesbaden, 1962) */

var sonido;
var amplitud;
var nivel;
var tamano;
var fft;
var onda;
var vid1;
var vid2;

function preload() {
  sonido = loadSound("DickHiggins-OmniaGallia.ogg");
}

function setup() {
  createCanvas(600, 400);
  sonido.loop();
  amplitud = new p5.Amplitude();
  fft = new p5.FFT();

  vid1 = createVideo("perkins.mp4");
  vid1.hide();
  vid1.loop();
  vid2 = createVideo("publico.mp4");
  vid2.hide();
  vid2.loop();
  canvas.parent("div-sketch");
}

function draw() {
  background(0, 50);
  let nivel = amplitud.getLevel();
  let tamano = map(nivel, 0, 0.8, 0, width / 2);

  if (keyIsPressed === true) {
    image(vid1, 0, 0);
  } else if (mouseIsPressed === true) {
    image(vid2, 0, 0);
  } else {
    stroke(255);
    fill(255);

    let speed = map(mouseX, 0, height, 0, 1.4);
    speed = constrain(speed, 0.01, 4);
    sonido.rate(speed);

    ellipse(mouseX, height / 2, tamano);

    let onda = fft.waveform();
    for (let i = 0; i < onda.length; i++) {
      let x = map(i, 0, onda.length, 0, width);
      let y = map(onda[i], -1, 1, height, 0);
      ellipse(x, y, 5);
    }
  }
}

function keyPressed() {
  var tiempo;

  if (keyCode == LEFT_ARROW && sonido.currentTime() > 1) {
    tiempo = sonido.currentTime() - 1;
    sonido.jump(tiempo);
  }

  if (keyCode == RIGHT_ARROW && sonido.currentTime() < sonido.duration() - 1) {
    tiempo = sonido.currentTime() + 1;
    sonido.jump(tiempo);
  }
}
