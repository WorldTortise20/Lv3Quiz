class Game{
    constructor(){
        this.questiontitle = createElement("h2");
        this.button1 = createButton("Maze Runner");
        this.button2 = createButton("Halo");
        this.button3 = createButton("Quiz");
        this.button4 = createButton("Fortnite");

        this.questiontitle2 = createElement("h2");
        this.button5 = createButton("It just does.");
        this.button6 = createButton("Chickens don't lay eggs...");
        this.button7 = createButton("LMAO! What a funny joke!");
        this.button8 = createButton("The name of the chicken is hen");

        this.questiontitle3 = createElement("h2");
        this.button9 = createButton("NO");
        this.button10 = createButton("sure");
        this.button11 = createButton("I guess");
        this.button12 = createButton("YA!");
    }

    hide(){
        this.button5.hide();
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        this.button9.hide();
        this.button10.hide();
        this.button11.hide();
        this.button12.hide();
        //this.questiontitle2.hide();
        this.questiontitle3.hide();
        this.questiontitle.hide();
        this.button13.hide();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        /*this.button18.hide();
        this.button19.hide();
        this.button20.hide();
        this.button21.hide();
        this.button22.hide();
        this.button23.hide();
        this.button24.hide();
        this.button25.hide();
        //this.button5.hide();*/
    }

    show(){
        this.button5.show();
        this.button6.show();
        this.button7.show();
        this.button8.show();
        this.button9.show();
        this.button10.show();
        this.button11.show();
        this.button12.show();
        this.questiontitle2.show();
        this.questiontitle3.show();
        this.questiontitle.show();
        this.button1.show();
        this.button2.show();
        this.button3.show();
        this.button4.show();
       /* this.button18.show();
        this.button19.show();
        this.button20.show();
        this.button21.show();
        this.button22.show();
        this.button23.show();
        this.button24.show();
        this.button25.show();*/
    }


    display(){
        //first set of questions
        this.button5.hide();
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        this.button9.hide();
        this.button10.hide();
        this.button11.hide();
        this.button12.hide();
        this.questiontitle2.hide();
        this.questiontitle3.hide();

        this.questiontitle.html("What is the name of this game?");
        this.questiontitle.position(displayWidth/2, displayHeight/80);

        this.button1.position(500,100);
        this.button2.position(500,150);
        this.button3.position(500,200);
        this.button4.position(500,250);

        this.button1.mousePressed(()=>{
            this.questiontitle2.show();
            this.button5.show();
            this.button6.show();
            this.button7.show();
            this.button8.show();

            this.questiontitle.hide();
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
        });

        this.button2.mousePressed(()=>{
            alert("OOPS; wrong answer! It would be cool if this were Halo, but it's not. Reload and try again!")
        });

        this.button3.mousePressed(()=>{
            this.questiontitle2.show();
            this.button5.show();
            this.button6.show();
            this.button7.show();
            this.button8.show();

            this.questiontitle.hide();
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
        });

        this.button4.mousePressed(()=>{
           alert("Does this look like Fortnite? Reload and try again, jokester!"); 
        });

    //second set of questions       
    this.questiontitle2.html("How does a chicken lay an egg?");
    this.questiontitle2.position(displayWidth/2, displayHeight/80);

    this.button5.position(500,100);
    this.button6.position(500,150);
    this.button7.position(500,200);
    this.button8.position(500,250);

    this.button5.mousePressed(()=>{
        alert("Do chickens lay eggs? I think that is the job of a hen, you know. Reload and try again, silly goose!")
    });

    this.button6.mousePressed(()=>{
        this.questiontitle3.show();
        this.button9.show();
        this.button10.show();
        this.button11.show();
        this.button12.show();

        
        this.questiontitle2.hide();
        this.button5.hide();
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
    });

    this.button7.mousePressed(()=>{
        this.questiontitle3.show();
        this.button9.show();
        this.button10.show();
        this.button11.show();
        this.button12.show();

        
        this.questiontitle2.hide();
        this.button5.hide();
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
    });

    this.button8.mousePressed(()=>{
       alert("Nice try. Reload and try again."); 
    });

//third set of questions
this.questiontitle3.html("Will you give this game a like?");
this.questiontitle3.position(displayWidth/2, displayHeight/80);

this.button9.position(500,100);
this.button10.position(500,150);
this.button11.position(500,200);
this.button12.position(500,250);

this.button9.mousePressed(()=>{
    alert("I respect your audacity; but it will not help you pass. Reload and try again!");
});

this.button10.mousePressed(()=>{
    alert("Really- that lifeless? Reload and try again.");
});

this.button11.mousePressed(()=>{
    alert("This can't be a guess! Reload and try again!");
});

this.button12.mousePressed(()=>{
   alert("YOU WIN!!!!!!!!! Remember to actually like this project!"); 
});
}

}//end of code