var quizGame;

function setup(){
createCanvas(windowWidth, windowHeight);

    alert("Answer the questions by pressing the correct button! It may take some time to load; give it 30 seconds! If the quiz doesn't show up, inspect the code (Ctrl+Shift+I)!");

    quizGame = new Game();
    quizGame.display();
}