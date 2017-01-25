var butn = document.getElementById('btn');
var time = document.getElementById('timer'); 
var div = document.getElementById("quesAns"); 
var main = document.getElementsByClassName("main")[0];
var i = 0;



            // TIMER



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


        //   QUESTIONS



var questions = [];
var answers = ["21", "Ocean", "5", "5" , "True"];

var ques1 = {
    question : 'Which number should come next in the series? <br> 1 , 1 , 2 , 3 , 5 , 8 , 13 ' ,
    a : '20' ,
    b : '21' ,
    c : '22' ,
    d : 'I dont know (I am Idiot)'
}
var ques2 = {
    question : 'If you rearrange the letters "CIFAIPC" you would have the name of a(n):' ,
    a : 'City' ,
    b : 'Animal' ,
    c : 'Ocean' ,
    d : 'I dont know (I am Idiot)'
}
var ques3 = {
    question : 'John needs 13 bottles of water from the store. John can only carry 3 at a time. What is the minimum number of trips John needs to make to the store?' ,
    a : '4' ,
    b : '5' ,
    c : '6' ,
    d : 'I dont know (I am Idiot)'
}
var ques4 = {
    
    question : 'Choose the number that is 1/4 of 1/2 of 1/5 of 200: ' ,
    a : '2' ,
    b : '5' ,
    c : '10' ,
    d : 'I dont know (I am Idiot)'
}
var ques5 = {
    question : 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?' ,
    a : 'True' ,
    b : 'False' ,
    c : 'Both' ,
    d : 'I dont know (I am Idiot)'
}
questions.push(ques1, ques2, ques3, ques4, ques5);



var nextBtn = document.getElementById("nxt");
var qPara = document.getElementById('ques');
var options = document.getElementsByClassName('options');
var slct = document.getElementsByName('choices');




        // NEXT QUESTION





function nxtQues(){
    nextBtn.setAttribute("disabled", "disabled");
    var x = i + 1;
    div.style.display = "Block";
    main.style.display = "none";
    document.getElementById("qcounter").innerHTML = "Question " + x;
    qPara.innerHTML = questions[i]["question"];
    options[1].innerHTML = "<input type = 'radio' onclick = 'makeEnable()' name= 'choices' >" + questions[i]["b"];
    options[0].innerHTML = "<input type = 'radio' onclick = 'makeEnable()' name= 'choices' >" + questions[i]["a"];
    options[2].innerHTML = "<input type = 'radio' onclick = 'makeEnable()' name= 'choices' >" + questions[i]["c"];
    options[3].innerHTML = "<input type = 'radio' onclick = 'makeEnable()' name= 'choices' >" + questions[i]["d"];
}

function makeEnable(){
    nextBtn.disabled =false;
}

var correctAns = 0;



    // ANSWER CHECKER




function next(){
    for(var j = 0; j < slct.length; j++){
        if(slct[j].checked){
        choice = slct[j].nextSibling.textContent;
        }    
    }
    if(choice == answers[i]){
        correctAns++;
    }
    if(i == 4){
         result();
    }
    i++;
    nxtQues();
}


            // RESULT PAGE



function result(){
   document.getElementsByClassName("qa")[0].style.display = "none";
    document.getElementsByClassName("results")[0].style.display = "Block";
    document.getElementById("rightAns").innerHTML = correctAns ;
    var prcntge = (correctAns/5)* 100 ;
    document.getElementById("score").innerHTML = prcntge  + "%";
    if(prcntge <= 60 ){
        document.getElementById("remarks").innerHTML = "SORRY! TRY AGAIN";
    }
    else if(prcntge > 60 ){
        document.getElementById("remarks").innerHTML = "CONGRATULATIONS!";
    }
    
}

function tryAgain(){
    window.location.reload();
}