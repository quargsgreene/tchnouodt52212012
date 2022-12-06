let image;

function preload() {
  image = loadImage('backgroundImage.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(image);

  // set up each scale degree individually
  const panels = [];
  const opacity = 150;
  const freqs = [174.61, 196.00, 220.00, 233.08, 261.63, 293.66, 311.13, 329.63, 349.23];
  const colors = [
    color(204, 167, 0),
    color(28, 125, 255),
    color(132, 0, 255),
    color(191, 255, 0),
    color(97, 255, 139),
    color(232, 93, 0),
    color(2, 217, 2),
    color(242, 212, 12),
    color(255, 247, 0),
    color(255, 217, 0),
  ];

  for (let i = 0; i < freqs.length; i++) {
    colors[i].setAlpha(opacity);
    panels.push(new PanelSynth((i * width) / 9, 0, colors[i], freqs[i]));
    panels[i].button();
  }
}

function draw() {
  fill(random(255));
  rect(random(width), random(height), random(100), random(10));
}

class PanelSynth {
  constructor(posX, posY, col, freq) {
    this.col = col;
    this.freq = freq;
    this.posX = posX;
    this.posY = posY;

    this.attackTime = 0.5;
    this.decayTime = 0.5;
    this.attackLevel = 0.5;
    this.decayLevel = 0;
    this.width = width / 9;
    this.height = height;
  }

  button() {
    const env = new p5.Envelope();
    env.setADSR(this.attackTime, this.decayTime);

    const osc = new p5.Oscillator();
    osc.freq(this.freq, 0.5);
    osc.amp(this.amp, 0.1);

    const distort = new p5.Distortion();
    distort.amp(0.5);
    distort.process(osc, 0.5);

    const reverb = new p5.Reverb();
    reverb.process(osc, 5, 1);

    fill(this.col);
    stroke(0, 100);

    const synthButton = createButton('');
    synthButton.style('background-color', this.col);
    synthButton.position(this.posX, this.posY);
    synthButton.class('synthesizer');
    synthButton.size(this.width, this.height);

    synthButton.mousePressed(() => {
      playSound(osc, env, this.attackLevel, this.decayLevel);
    });
  }
}

function playSound(oscillator, envelope, attack, decay) {
  oscillator.start();
  envelope.ramp(oscillator, 0, attack, decay);
}
