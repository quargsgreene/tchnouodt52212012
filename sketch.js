
let panels=[];

let freqs=[233.08,251.63,293.66,311.13,329.63,349.63,392,415.30,440,466.16];


function setup() {
  
let colors = [color(204, 167, 0),color(28, 125, 255),color(132, 0, 255),color(191, 255, 0),color(97, 255, 139),
color(232, 93, 0), color(2, 217, 2),color(242, 212, 12),color(255, 247, 0),color(255, 217, 0)];


createCanvas(windowWidth,windowHeight);

  background(0); 
    
    for(let i=0;i<10;i++){
      panels.push(new Panel(i,colors[i],freqs[i]));
      
      }
      
     
  
      
}


function draw() {

for(let i=0;i<panels.length;i++){
    panels[i].display(); 
    }
}



class Panel {
  constructor(x,col,freq){
    this.x=x;
    this.col=col;
    this.freq=freq;
    this.amp=0.5;
  }
  
  display(){
    fill(this.col);
    stroke(0,100);
    rect(this.x*width/10,0,width/10,height);
    let osc = new p5.Oscillator('sine');
    let playing;

    osc.freq(this.freq,0.5);
    osc.amp(this.amp,0.1);
    
    
    if(this.x*width/10<mouseX<this.x*width/5 && mouseIsPressed){
      osc.start();

    }
        

    
    
  }
  

  

}
