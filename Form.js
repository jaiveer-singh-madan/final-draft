class Form
{
    constrcutor(){   
   }
   hide(){
       this.greeting.remove();
       this.button.remove();
       this.input.remove();
       this.title.remove();
       this.tmc.remove();
       this.aimim.remove();
       this.bjp.remove();
       this.left.remove();
   }
   
   display(){
    var title = createElement('h2');
       title.html("Bengal Assembly polls 2021");
       title.position(displayWidth/2-50, 0);

      var input=createInput("name");
       input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
       
       var button = createButton('Vote');
       button.position(displayWidth/2 + 30, displayHeight/2); 

        button.mousePressed(()=>{

        this.tmc=createButton("Mamata Banerjee");
        this.tmc.position(displayWidth/4, displayHeight/4);

        this.bjp=createButton("Sourav Ganguly");
        this.bjp.position(displayWidth/3, displayHeight/3);

        this.aimim=createButton("asaddudin owaisi");
        this.aimim.position(displayWidth/2, displayHeight/2);

        this.left=createButton("rahul gandhi");
        this.left.position(displayWidth/1.5, displayHeight/1.5);

        this.tmc.mousePressed(()=>{
            this.tmc.remove();
           this.aimim.remove();
           this.left.remove();
           this.bjp.remove();
            mamataCount+=1;
           voterCount+=1;
        })

        this.bjp.mousePressed(()=>{
           this.tmc.remove();
           this.aimim.remove();
           this.left.remove();
           this.bjp.remove();
            gangulyCount+=1;
            voterCount+=1;
        })

        this.left.mousePressed(()=>{
            this.tmc.remove();
            this.aimim.remove();
            this.left.remove();
            this.bjp.remove();
            gandhiCount+=1;
            voterCount+=1;
        })

        this.aimim.mousePressed(()=>{
            this.tmc.remove();
            this.aimim.remove();
            this.left.remove();
            this.bjp.remove();
            owaisiCount+=1;
            voterCount+=1;
        })
   })
}
} 
