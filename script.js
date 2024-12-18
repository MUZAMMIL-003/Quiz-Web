var easyQuestions = [
  {
    question: " What is the output of `console.log(typeof NaN)`?",
    options: ["number", "string", " boolean", "undefined"],
    correctAnswer: "number",
  },
  {
    question:
      "  Which of the following is a way to create an object in JavaScript?",
    options: ["{}", "Object.create();", "new Object();", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: " How do you check if an object is an array?",
    options: [
      "Array.isArray()",
      " typeof obj == 'array'",
      "obj instanceof Array",
      "All of the above",
    ],
    correctAnswer: "Array.isArray()",
  },
  {
    question: " What will `[] == ![]` return?",
    options: ["true", "false", "undefined", " error"],
    correctAnswer: "true",
  },
  {
    question: " What is the value of `null == undefined`?",
    options: ["true", "false", " null", "undefined"],
    correctAnswer: "true",
  },
  {
    question:
      " Which of the following methods is used to add an element to the beginning of an array?",
    options: [" push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "unshift()",
  },
  {
    question: " How do you create a new promise in JavaScript?",
    options: [
      "new Promise()",
      "new PromiseFunction()",
      "new PromiseObject()",
      "Promise.new()",
    ],
    correctAnswer: "new Promise()",
  },
  {
    question: " What will `console.log(0.1 + 0.2 == 0.3)` output?",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "false",
  },
  {
    question: " Which of these is used to handle exceptions in JavaScript?",
    options: ["try/catch", "if/else", "finally", "all of the above"],
    correctAnswer: "try/catch",
  },
  {
    question:
      " What is the default value of `this` inside a method in JavaScript?",
    options: ["global object", "undefined", "method itself", "null"],
    correctAnswer: "global object",
  },
];

var mediumQuestions = [
  ...easyQuestions, // Include easy questions as part of medium
  {
    question: " What will `console.log([1] == [1])` output?",
    options: ["true", "false", "error", "undefined"],
    correctAnswer: "false",
  },
  {
    question:
      " Which of the following methods is used to remove the last element from an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    correctAnswer: "pop()",
  },
  {
    question: " What does `JSON.stringify()` do?",
    options: [
      "Converts JavaScript objects to JSON strings",
      "Converts JSON strings to JavaScript objects",
      "Prints JSON objects",
      "None of the above",
    ],
    correctAnswer: "Converts JavaScript objects to JSON strings",
  },
  {
    question: " Which of the following is NOT a falsy value in JavaScript?",
    options: ["false", "null", "undefined", "0", "1"],
    correctAnswer: "1",
  },
  {
    question: " What will `console.log(1 + '1')` output?",
    options: ["11", "2", "error", "undefined"],
    correctAnswer: "11",
  },
  {
    question: " What is the purpose of the `bind()` method in JavaScript?",
    options: [
      "To bind a function to an object",
      "To create a copy of a function",
      "To invoke a function immediately",
      "None of the above",
    ],
    correctAnswer: "To bind a function to an object",
  },
  {
    question: " What does `typeof NaN` return?",
    options: ["number", "string", "object", "undefined"],
    correctAnswer: "number",
  },
  {
    question: " Which of these is used to convert a string to a number?",
    options: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: " How do you declare a constant variable in JavaScript?",
    options: ["const", "let", "var", "constant"],
    correctAnswer: "const",
  },
  {
    question: " What does the `this` keyword refer to inside a method?",
    options: [
      "The object the method is called on",
      "The global object",
      "The method itself",
      "undefined",
    ],
    correctAnswer: "The object the method is called on",
  },
];

var hardQuestions = [
  ...mediumQuestions,

  {
    question: " What will `console.log([] + [])` output?",
    options: ["undefined", "null", "'' (empty string)", "NaN"],
    correctAnswer: "'' (empty string)",
  },
  {
    question: " What is the output of `console.log([] == ![]);`?",
    options: ["true", "false", "error", "undefined"],
    correctAnswer: "true",
  },
  {
    question: " What does the `apply()` method do in JavaScript?",
    options: [
      "Invokes a function with a given `this` value and an array of arguments",
      "Binds a function to an object",
      "Changes the `this` context of a function",
      "Creates a copy of a function",
    ],
    correctAnswer:
      "Invokes a function with a given `this` value and an array of arguments",
  },
  {
    question: " What is the output of `console.log([] == false)`?",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "true",
  },
  {
    question:
      " Which of the following is the correct way to define a class in JavaScript?",
    options: [
      "function MyClass() {}",
      "class MyClass {}",
      "var MyClass = function() {}",
      "MyClass: function() {}",
    ],
    correctAnswer: "class MyClass {}",
  },
  {
    question:
      " What will the following code output: `console.log([] == ![] == false)`?",
    options: ["true", "false", "error", "undefined"],
    correctAnswer: "true",
  },
  {
    question:
      " Which of the following is an example of a deep copy of an object?",
    options: [
      "Object.assign()",
      "JSON.parse(JSON.stringify())",
      "Spread operator",
      "None of the above",
    ],
    correctAnswer: "JSON.parse(JSON.stringify())",
  },
  {
    question: " What is the output of `console.log('2' > 1)`?",
    options: ["true", "false", "error", "undefined"],
    correctAnswer: "true",
  },
  {
    question: " What does the `Symbol()` function do in JavaScript?",
    options: [
      "Creates a new primitive symbol",
      "Converts a string to a symbol",
      "Creates a unique object property key",
      "Both 'Creates a new primitive symbol' and 'Creates a unique object property key'",
    ],
    correctAnswer:
      "Both 'Creates a new primitive symbol' and 'Creates a unique object property key'",
  },
  {
    question: " What is the result of `console.log(1 == true)`?",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "true",
  },
];

var selectedQuestions = []; // Store the selected questions based on difficulty
var currentQuestionIndex = 0; // Index for current question
var userAnswers = []; // Store the selected answers for each question

// Function to start the quiz based on difficulty selection
function startQuiz() {
  var difficulty = document.getElementById("difficultySelect").value;

  // Select the appropriate questions based on difficulty
  if (difficulty === "easy") {
    selectedQuestions = easyQuestions;
  } else if (difficulty === "medium") {
    selectedQuestions = mediumQuestions;
  } else {
    selectedQuestions = hardQuestions;
  }

  // Hide the start button and show the quiz container
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  // Hide all elements with class 'h11'

  // Hide all elements with class 'p11'
  var p11Elements = document.getElementsByClassName("p11");
  for (var i = 0; i < p11Elements.length; i++) {
    p11Elements[i].style.display = "none";
  }

  // Show the submit button now that the quiz has started
  document.getElementById("submitButton").style.display = "inline-block";

  // Initialize user answers array with undefined values
  for (var i = 0; i < selectedQuestions.length; i++) {
    userAnswers[i] = undefined;
  }

  // Render the first question
  renderQuestion();
}
// Function to render the current question
function renderQuestion() {
  var question = selectedQuestions[currentQuestionIndex];
  var questionDiv = document.getElementById("quiz-container");

  // Clear previous question
  questionDiv.innerHTML = "";

  // Display the question
  questionDiv.innerHTML += "<p>" + question.question + "</p>";

  // Display the options
  for (var i = 0; i < question.options.length; i++) {
    questionDiv.innerHTML += `
            <input type="radio" class="radio-buttons" id="option_${currentQuestionIndex}_${i}" name="question_${currentQuestionIndex}" value="${
      question.options[i] 
    }"     

            ${
              userAnswers[currentQuestionIndex] === question.options[i]
                ? "checked"
                : ""
            } 
            onclick="selectAnswer('${question.options[i]}')">
            <label for="option_${currentQuestionIndex}_${i}">${
      question.options[i]
    }</label><br>
        `;
  }

  // Go Back button (if not the first question)
  questionDiv.innerHTML += `
        <button id="goBackButton" onclick="goBack()" ${
          currentQuestionIndex === 0 ? 'style="display:none"' : ""
        }>Go Back</button>
    `;

  // Next Question button (if not the last question)
  questionDiv.innerHTML += `
        <button id="nextButton" onclick="nextQuestion()" ${
          currentQuestionIndex === selectedQuestions.length - 1
            ? 'style="display:none height:100px"'
            : ""
        }>Next Question</button>
    `;
}

// Function to select an answer
function selectAnswer(answer) {
  userAnswers[currentQuestionIndex] = answer;
}

// Function to move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  renderQuestion();
}

// Function to go back to the previous question
function goBack() {
  currentQuestionIndex--;
  renderQuestion();
}

// Function to submit the quiz
function submitQuiz() {
  // Check if all questions are answered
  let allAnswered = true;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === undefined) {
      allAnswered = false;
      break;
    }
  }

  if (!allAnswered) {
    alert("Please answer all questions before submitting.");
    return;
  }

  // Calculate the score
  let correctAnswers = 0;
  for (let i = 0; i < selectedQuestions.length; i++) {
    if (userAnswers[i] === selectedQuestions[i].correctAnswer) {
      correctAnswers++;
    }
  }

  // Calculate the percentage
  let percentage = (correctAnswers / selectedQuestions.length) * 100;

  // Determine the grade based on the percentage
  let grade;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Show the score container
  document.getElementById("score-container").style.display = "block";
  document.getElementById("score").innerHTML = `
Your Score: ${correctAnswers} / ${selectedQuestions.length}<br>
Your Percentage: ${percentage.toFixed(2)}%<br>
Grade: ${grade}
`;

  // Enable "See Answers" button
  document.getElementById("seeAnswersBtn").disabled = false;

  // Hide the quiz container and show the restart button
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("submitButton").style.display = "none"; // Hide Submit button
  document.getElementById("restartBtn").style.display = "block"; // Show Restart but
}

// function seeAnswers() {
//  var answersDiv = document.getElementById("answers");
//  answersDiv.innerHTML = ""; // Clear previous content

//  for (var i = 0; i < selectedQuestions.length; i++) {
//      var question = selectedQuestions[i];
//      var userAnswer = userAnswers[i];
//      var correctAnswer = question.correctAnswer;

//      // Create question text
//      var questionText = "<p><strong>Q" + (i + 1) + ": </strong>" + question.question + "<br>";

//      // Check if the user's answer is correct
//      if (userAnswer === correctAnswer) {
//          questionText += "<strong>Your Answer: </strong><span class='correct'>" + userAnswer + "</span><br>";
//          questionText += "<strong>Correct Answer: </strong><span class='correct'>" + correctAnswer + "</span></p>";
//      } else {
//          questionText += "<strong>Your Answer: </strong><span class='wrong'>" + userAnswer + "</span><br>";
//          questionText += "<strong>Correct Answer: </strong><span class='correct'>" + correctAnswer + "</span></p>";
//      }

//      answersDiv.innerHTML += questionText;
//  }

//  // Show the modal
//  document.getElementById("myModal").style.display = "block";
// }

function seeAnswers() {
  var answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = ""; // Clear previous content

  for (var i = 0; i < selectedQuestions.length; i++) {
    var question = selectedQuestions[i];
    var userAnswer = userAnswers[i]; // Get user's answer
    var correctAnswer = question.correctAnswer; // Get correct answer

    console.log(`Question ${i + 1}:`);
    console.log("User's Answer: " + userAnswer);
    console.log("Correct Answer: " + correctAnswer);

    // Create question text
    var questionText =
      "<p><strong>Q" + (i + 1) + ": </strong>" + question.question + "<br>";

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
      questionText +=
        "<strong>Your Answer: </strong><span class='correct'>" +
        userAnswer +
        "</span><br>";
      questionText +=
        "<strong>Correct Answer: </strong><span class='correct'>" +
        correctAnswer +
        "</span></p>";
    } else {
      questionText +=
        "<strong>Your Answer: </strong><span class='wrong'>" +
        userAnswer +
        "</span><br>";
      questionText +=
        "<strong>Correct Answer: </strong><span class='correct'>" +
        correctAnswer +
        "</span></p>";
    }

    answersDiv.innerHTML += questionText;
  }

  // Show the modal with answers
  document.getElementById("myModal").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function restartQuiz() {
  // Reset question index and user answers
  currentQuestionIndex = 0;
  userAnswers = [];

  // Hide the score container and quiz container
  document.getElementById("score-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "none";

  // Show the start button again
  document.getElementById("startBtn").style.display = "block";

  // Hide the submit button and restart button (as quiz is not active yet)
  document.getElementById("submitButton").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";

  // Re-enable the difficulty selection dropdown
  document.getElementById("difficultySelect").disabled = false;

  // Clear the answers section in case it was shown
  document.getElementById("answers").innerHTML = "";

  // Ensure the "See Answers" button is disabled
  document.getElementById("seeAnswersBtn").disabled = true;

  // Render the first question
  renderQuestion();
}
