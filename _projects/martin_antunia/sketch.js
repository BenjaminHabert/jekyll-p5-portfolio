var colorRect = 0,
  valorSuma = 0.5,
  velocidad = 0,
  movimiento = 0,
  movimientoNeg = 0,
  aleatorio = 0,
  aleatorioAncho = 0,
  agrandaMenos = 256,
  agrandaMas = 256,
  valorSeno = 0;

function setup() {
  canvas = createCanvas(512, 512);
  // aquí va el id del div que contiene el archivo.js
  canvas.parent("div-sketch");
  frameRate(30);
}

function draw() {
  background(movimientoNeg, 5);

  valorSeno = sin(velocidad);
  movimiento = map(valorSeno, -1, 1, 0, height);

  movimientoNeg = map(valorSeno, -1, 1, height, 0);

  velocidad += 0.01;

  colorRect += valorSuma;

  if (colorRect >= 255) {
    valorSuma = -0.5;
  } else if (colorRect <= 0) {
    valorSuma = 0.5;
  }

  stroke(movimiento, 5);
  fill(random(movimientoNeg), 1);

  if (frameCount < 1127) {
    auraBrillante();
  } else if (frameCount > 1200 && frameCount < 1900) {
    auraExpansiva();
  } else if (frameCount > 2000 && frameCount < 2500) {
    auraRedonda();
  } else if (frameCount > 2550) {
    strokeWeight(1);
    frameCount = 0;
  }
}

function auraBrillante() {
  for (var y = 0; y <= height; y += 30) {
    for (var x = 0; x <= height; x += 30) {
      //bezier(y,x,y,movimiento,x,y,x,movimiento);
      aleatorio = random(0, height);
      aleatorioAncho = random(0, width);

      bezier(
        aleatorio,
        aleatorioAncho,
        height / 2,
        width / 2,
        x,
        y,
        aleatorio,
        aleatorioAncho
      );

      //bezier(y,x,height/2,width/2,movimiento,movimientoNeg,x,y)
      circle(y, x, colorRect);
    }
  }
}

function auraExpansiva() {
  agrandaMenos -= 0.3;
  agrandaMas += 0.3;

  fill(movimiento, 1);

  stroke(movimientoNeg, 5);
  for (var y = 0; y <= 50; y += 10) {
    for (var x = 0; x <= 50; x += 10) {
      bezier(
        random(agrandaMenos, agrandaMas),
        random(agrandaMenos, agrandaMas),
        height / 2,
        width / 2,
        height / 2,
        width / 2,
        random(agrandaMenos, agrandaMas),
        random(agrandaMenos, agrandaMas)
      );
      aleatorio = random(0, height);
      aleatorioAncho = random(0, width);
    }
  }
}

function auraRedonda() {
  agrandaMenos -= 1;
  circle(height / 2, width / 2, agrandaMenos);
  stroke(movimiento, 50);
  strokeWeight(5);
  translate(-height, -height);
  for (var i = 0; i <= height * 2; i += 30) {
    for (var j = 0; j <= height * 2; j += 30) {
      point(i + movimientoNeg * 2 * valorSeno, j + movimiento * 2 * valorSeno);
    }
  }
}
