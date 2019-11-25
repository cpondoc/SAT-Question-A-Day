var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/14MTVpCwE_B1rpxmeZVaO3H8JJLUin3HLEw5s3mvBlv0/edit?usp=sharing';
var answered = false;
var today = new Date();
var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
var answer = "";
var question = "";
var answer_choice1 = "";
var answer_choice2 = "";
var answer_choice3 = "";
var answer_choice4 = "";
var author = "";
var explanation = "";

function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
}

function showInfo(data, tabletop) {
    for (i = 0; i < data.length; i++) {
        
        //Get the first element
        element = data[i];
        
        if (element["Date"] == date) {
            answer = element["Answer"];
            question = element["Question"];
            answer_choice1 = element["Answer Choice 1"];
            answer_choice2 = element["Answer Choice 2"];
            answer_choice3 = element["Answer Choice 3"];
            answer_choice4 = element["Answer Choice 4"];
            author = element["Author"];
            explanation = "<b>Explanation:</b> " + element["Explanation"];
        }
        setVue();
        MathJax.typeset();
    }
  }

function myFunction(clicked_id) {
    if (answered == false) {
                
        answered = true;
        
        if (answer == clicked_id) {
            document.getElementById(clicked_id).style.backgroundColor = "green";
            document.getElementById(clicked_id).style.borderColor = "green";
        }

        else {
            document.getElementById(clicked_id).style.backgroundColor = "red";
            document.getElementById(clicked_id).style.borderColor = "red";
        }
        
        document.getElementById("explanation").innerHTML = explanation;
        MathJax.typeset();
    }
}

function setVue() {
    var app = new Vue({ 
        el: '#app',
        data: {
            title: '📚 SAT Question a Day 📚',
            description: 'One question a day gets your SAT score up right away!',
            date: date,
            question: question,
            answer_choice1: answer_choice1,
            answer_choice2: answer_choice2,
            answer_choice3: answer_choice3,
            answer_choice4: answer_choice4,
            author: author
        }
    });
}

window.addEventListener('DOMContentLoaded', init)