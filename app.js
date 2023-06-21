var questions = [
 {
        question:"What HTML stands For?",
        option1:"Hyperlinks And Text Markup Language",
        option2:"Hyperytext Markup Language",
        option3:"Home Tool Markup Language",
        CorrectOption:'Hypertext Markup Language'
    },
    {
        question:"Who  is making the Web standard?",
        option1:"Google",
        option2:"The World Wide Web Conssortium",
        option3:"Microsoft",
        CorrectOption:'The World Wide Web Conssortium'
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    }
    
];

var ques = document.getElementById("question");
var option1 =document.getElementById("option1");
var option2 =document.getElementById("option2");
var option3 =document.getElementById("option3");
var index = 0;
var btn = document.getElementById("btn");
var score = 0;


function nextQuestion(){
    var options = document.getElementsByName("answer");
    for(var i = 0; i < options.length;i++){
        if(options[i].checked){
            var selected = options[i].value;
            var userAnswer = questions[index - 1][`option${selected}`];
            var correctAnswer = questions[index - 1].correctOption;
            if(userAnswer === correctAnswer){
                score++;
            }
        }
        options[i].checked =false;
        btn.disabled = true;
    }
    if(index > questions.length - 1){
        console.log("end")
      console.log((score / questions.length) * 100 + "%")
    }else{
        ques.innerHTML = questions[index].question;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;
        index++;
    }
    
};
nextQuestion();

function enableBtn(){
    btn.disabled = false;
}


var min = 9;
var sec = 59;
var timer = document.getElementById('timer');

var interval = setInterval (function(){
    timer.innerHTML = `${min}:${sec}`; 
    sec--
    if(sec < 0){
    if(min < 10){
        nextQuestion();
        min--
        sec = 59
    }else{
        min--
        sec = 59;
    }
    
}
} ,1000)


