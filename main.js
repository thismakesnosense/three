function check(){
    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var correct = 0;

     if(question1 === "css") {
         correct++;
     }
     if(question2 === "html") {
        correct++;
    }
    if(question3 === "java") {
        correct++;
    }


    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("number_correct").innerHTML= "you got" + correct + "correct.";
}