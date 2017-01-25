var currentQuestion = 0;
var score = 0;
var totQuestions = (questions.length);

var time = document.getElementById('timer');
var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 =  document.getElementById("opt1");
var opt2 =  document.getElementById("opt2");
var opt3 =  document.getElementById("opt3");
var opt4 =  document.getElementById("opt4");
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent =  (questionIndex + 1) + ". " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function display(){
    home.style.display = "none";
     container.style.display = "";
}

function loadNextQuestion(){

    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert("please select your answer!");
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions -1){
        nextButton.textContent = "Finish";
    }
     if(currentQuestion == totQuestions){
         container.style.display = "none";
         result.style.display = "";
         result.textContent = "Your Score: " + score ;
         return;
     }
     loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

function timer(){
    
    // div.style.display = "Block";
    // butn.style.display = "none";
    var min = 4;
    var sec = 59;
    var int = setInterval(function(){
        if(min < 10 && sec < 10){
            time.innerHTML = "0" + min + ":" + "0" + sec;
        }
        else if( min < 10){
            time.innerHTML = "0" + min + ":" + sec;
        }
        else if( sec < 10){
            time.innerHTML = min + ":"+ "0" + sec;
        }
        
       else{ time.innerHTML = min + ":" + sec;}
        sec--;
        
         if(min < 0){
            clearInterval(int);
            time.innerHTML = "Time Finished...!";
            result();
        
        }
        else if(sec == 0){
            min--;
            sec = 60;
        }
    }, 1000);
}
