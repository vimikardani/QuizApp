
// Display/Fetch Username
let username=localStorage.getItem('username');
document.getElementById('username').innerHTML=`<b style="color: Black;font-size: 14px;font-weight: 25px;">${username}</b> your result is:` ;
console.log(username);

// Display Total taken Time
const endTime=localStorage.getItem('endTime')
const startTime=localStorage.getItem('startTime')
let totalTimeTaken=Math.abs(Number(endTime)-Number(startTime));
console.log(endTime);
console.log(startTime);
document.getElementById('total_time').innerHTML=`Total Time Taken : <b style="color: Black;font-size: 14px;font-weight: 25px;">${totalTimeTaken/1000}</b>`;

// Display total Question
document.getElementById('total_que').innerHTML=`Total Question : <b style="color: Black;font-size: 14px;font-weight: 25px;">${10 }</b>`;

// Display Total Attempted Question
let attempt =localStorage.getItem('attempted_count');
document.getElementById('attempt_que').innerHTML=`Attempt : <b style="color: Black;font-size: 14px;font-weight: 25px;">${attempt}</b>`;
 

// Display correct answer
let userscore=localStorage.getItem('userScore');
console.log(userscore);
document.getElementById('correct_que').innerHTML=`Correct : <b style="color: Black;font-size: 14px;font-weight: 25px;">${userscore}</b>`;

// Display Wrong Answer
let Wrong_answer=0;
document.getElementById('wrong_que').innerHTML=`Wrong :  <b style="color: Black;font-size: 14px;font-weight: 25px;">${Wrong_answer=attempt-userscore}</b>`;
console.log(Wrong_answer);

// Calculate & Display Percentage
let percentage=0;
document.getElementById('percentage').innerHTML=`Percentage : <b style="color: Black;font-size: 14px;font-weight: 25px;">${userscore/10*100}</b>`;
console.log(percentage);

// Page redirect on homepage
function gotoHome(){
    window.location.href="QuizAppHomepage.html";

}

// Page redirect on Question page
function startAgain(){
    window.location.href="QuizAppQuestion.html";

}
