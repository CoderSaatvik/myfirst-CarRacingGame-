class Form {

  constructor() {
    this.input = createInput("");
    this.input1 =createElement("h3")
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.resetButton = createButton('Reset')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input1.hide();
  
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);
    this.input1.html("Name")
    this.input.position(displayWidth/2-60, 160);
    this.input1.position(displayWidth/2-120, 140);
    this.button.position(displayWidth/2, 200);
    this.resetButton.position(displayWidth-125,40)
    this.resetButton.mousePressed(() =>{
    player.updateCount(0);
    game.update(0);
    Player.updateCarsAtEnd(0)
    })
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.input1.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-60, 100);
    });

  }
}
