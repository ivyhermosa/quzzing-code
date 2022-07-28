var questionTag = document.getElementById("question")
var choices = document.getElementById("choices")
 
// var with arrays and objects for questions 

var data = [
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
]


var answer = (value, answer) => {
    if(value === answer){
        console.log("true")
    }else{
        console.log("false")
    }
}

var questions = () => {
    let score = 0;


    for (obj of data) {
        

        choices.innerHTML = ""
        questionTag.innerHTML = obj.question

        for (i in obj.choices) {
            choices.innerHTML += `<button onclick='answer("${obj.choices[i]}","${obj.answer}")' style="margin:10px;">${obj.choices[i]}</button>`
        }

        
        

    }

}

questions()