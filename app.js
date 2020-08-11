console.log('Are you read for quiz?');


var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");

var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

 function loadQuestion(questionIndex) {
     var q = questions[questionIndex];
     questionEl.textContent = (questionIndex + 1) + '. ' + q.question;     
     opt1.textContent = q.option1;
     opt2.textContent = q.option2;
     opt3.textContent = q.option3;
     opt4.textContent = q.option4;
}

 function loadNextQuestion() {
     var selectedOption = document.querySelector('input[type=radio]:checked')
         console.log(selectedOption);
      if(!selectedOption) {
          alert("Please select your answer")
           return ;
      }

      var answer = selectedOption.value
       
       console.log(questions[currentQuestion].answer);
       console.log(answer);

       if(questions[currentQuestion].answer == answer) {
           
          score += 10;
          console.log(score + ' 00000000');
       }     
        
         selectedOption.checked = false;
         currentQuestion++;
         
       if(currentQuestion == totalQuestions - 1) {
           nextButton.textContent = 'Finish'
       }  
           
           
       if(currentQuestion == totalQuestions) {
           container.style.display = 'none';
           resultCont.style.display = '';
           resultCont.textContent = "Your Score: " + score
           return;
       }

       loadQuestion(currentQuestion);
 }

 loadQuestion(currentQuestion);