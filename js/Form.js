class Form{

    constructor(){

    }
    display(){
        var title=createElement('h2')
        var greeting=createElement('h2')
        title.html("Car Racing")
        title.position(300,90)
        var input=createInput("Enter Your Name")
        input.position(300,150) 

         var button=createButton("Statrt")     
         button. position(300,190)
         button.mousePressed(function(){
         input.hide()
         button.hide()
         var name=input.value();
         playerCount=playerCount+1;
         player.updateName(name)
         player.updateCount(playerCount)
         greeting.html("Welcome: "+name)
         greeting.position(400,150);
       
        })
    }
}