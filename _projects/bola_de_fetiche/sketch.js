var movimiento = 0,
  movimientoNeg = 0,
  velocidad = 0,
  velocidadDos = 0,
  velocidadTres = 0,
  aleatorio = 0,
  aleatorioAncho = 0,
  valorSuma = 0.5,
  colorRect = 0,
  agrandaMenos = 256,
  agrandaMas = 256,
  valorSeno = 0,
  tamano = 0.5,
  sumaTamano = 1,
  vuelta = 0,
  agranda = 310,
  luz = 0;

function setup() {
  createCanvas(512, 512, WEBGL);
  textura = createGraphics(1000, 1000);
  background(0);
}

function draw() {
  noStroke()

  pointLight(255, 255, 255, 0, 0, 300)

  valorSeno = sin(velocidad)
  movimiento = map(valorSeno, -1, 1, 0, height)
  movimientoNeg = map(valorSeno, -1, 1, height, 0)

  velocidad += 0.01


  velocidadDos += 0.02
  valorSenoDos = sin(velocidadDos)
  valorSenoTres = sin(velocidadTres)
  velocidadTres += 0.03
  coloruno = map(valorSenoTres, -1, 1, 0, 255)
  colordos = map(valorSenoDos, -1, 1, 0, 255)

  if (frameCount > 1700) {
    vuelta = 0
    tamano = -10
    camera(0, 0, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0)
    agranda = 310
    frameCount = 0
    luz = 0
    ambientLight(0)
  }

  if (vuelta == 1 && tamano < 0) {
    vuelta = 2
  } else if (vuelta == 2 && tamano < 370) {
    tint(coloruno, colordos, 0, 250)
  } else if (vuelta == 2 && tamano < 380 && tamano > 370) {
    tint(coloruno, colordos, 0, 250)
    sumaTamano = 0
    camera(agranda, agranda, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 1, 1, 1)
    agranda -= 1
    luz += 2
    ambientLight(luz)
  }
  if (agranda < 10) {
    tint(coloruno, colordos, 0, 250)
    agranda = 0
    vuelta = 4
    camera(agranda, agranda, 0, 200, 200, 0, mouseX, mouseY, 0)
    ambientLight(luz)
  }
  esfera()
}

function esfera() {
  textura.background(movimiento, 5)
  textura.stroke(movimientoNeg, 50)
  textura.noFill()

  auraBrillante()

  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  texture(textura)
  sphere(tamano)
  if (vuelta == 0 && tamano > 290) {
    sumaTamano = -1
    vuelta = 1
  } else if (tamano < 0) {
    sumaTamano = 1
  }
  tamano += sumaTamano
}

function auraBrillante() {
  for (var y = 0; y <= height; y += 30) {
    for (var x = 0; x <= height; x += 30) {
      aleatorio = random(0, height * 2)
      aleatorioAncho = random(0, height * 2)

      textura.bezier(aleatorio, aleatorioAncho, height / 2, width / 2, x, y, aleatorio, aleatorioAncho)

    }
  }
}