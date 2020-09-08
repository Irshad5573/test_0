class HomeScreen {


  constructor() {
    this.button1=createImg('BT.png');
 }
        

  hide(){
    this.button.hide();
  }

  display(){

    image(BG_Img,windowWidth-1600,windowHeight-800,this.canvasWidth,this.canvasHeight);
    
    

    this.button1.position(windowWidth/2 + 20, windowHeight/2);
  
    this.button1.mousePressed(()=>{  
      gameState=1;
      this.button1.hide();
    });
      console.log(gameState);

    drawSprites();
    
  }
  
    
}