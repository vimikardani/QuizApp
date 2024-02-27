// Show Category Name

let category = localStorage.getItem('category_name')
document.getElementById('cat_name').innerHTML = category;
document.title = category;

// Store Category Wise Question answer in array
let Pipes_and_Cisterns = [
    {
        numb: 1,
        question: "In 1 minute 3/7 of a basin is filled. Whatever remains of the container can be filled in:",
        answer: "4/3",
        options: [
            "2 min",
            "4/3",
            "7/3",
            "none of these"
        ]
    },
    {
        numb: 2,
        question: "A pump can fill a tank with water in 2 hours. In light of a break in the tank, it takes 7/3 hours to fill the tank. The hole can discharge the filled tank in:",
        answer: "14 hours",
        options: [
            "7/3 hours",
            "7 hours",
            "8 hours",
            "14 hours"
        ]
    },
    {
        numb: 3,
        question: "Pipes A and B can fill a tank in 20 hours and 30 hours separately and channel C can purge the full tank in 40 hours. In the event that every one of the funnels is opened together, what amount of the reality of the situation will become obvious eventually expected to make the tank full?",
        answer: "120/7 hours",
        options: [
            "73/7 hours",
            "64/5 hours",
            "120/7 hours",
            "77/4 hours"
        ]
    },
    {
        numb: 4,
        question: "Two channels can fill a tank in 15 hours and 12 hours separately and a third pipe can purge it in 4 hours. In the event that the channels are opened all together at 8 am, 9 am and 11am separately, the tank will be exhausted at",
        answer: "2.40 pm",
        options: [
            "11.40 am",
            "12.40 pm",
            "1.40 pm",
            "2.40 pm"
        ]
    },
    {
        numb: 5,
        question: "A tank is fitted with two taps A and B. A can fill the tank totally in 45 minutes and B can purge the full tank in 60 minutes. On the off chance that both the taps are opened on the other hand for 1 minute, then in what amount of time the unfilled tank will be filled totally?",
        answer: "none of these",
        options: [
            " 2 hrs 55 min",
            " 3 hrs 40 min",
            " 5 hrs 53 min",
            "none of these"
        ]
    },
    {
        numb: 6,
        question: "A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?",
        answer: "30 min",
        options: [
            "15 min",
            "20 min",
            "27.5 min",
            "30 min"
        ]
    },
    {
        numb: 7,
        question: "A break in the base of a tank can purge the full tank in 6 hours. A channel funnel fills water at the rate of 4 liters for each moment. At the point when the tank is full, the channel is opened and because of the break, the tank is void in 8 hours. The limit of the tank is",
        answer: "5760 ltr.",
        options: [
            "5260 ltr.",
            "5760 ltr.",
            "5846 ltr.",
            "6970 ltr."
        ]
    },
    {
        numb: 8,
        question: "A channel can fill a reservoir in 12 minutes and another funnel can fill it in 15 minutes, however a third pipe can discharge it in 6 minutes. The initial two funnels are kept open for 5 minute to start with and after that the third pipe is additionally opened. In what time is the storage exhausted?",
        answer: "45 minutes",
        options: [
            "30 minutes",
            "33 minutes",
            "75/2 minutes",
            "45 minutes"
        ]
    },
    {
        numb: 9,
        question: "A cistern has two pipes. One can fill it with water in 8 hours and the other can empty it in 5 hours. In how many hours will the cistern be emptied if the both the pipes are opened together when 3/4 of the cistern is already full of water.",
        answer: "10 hours",
        options: [
            "13.5 hours",
            "10 hours",
            "6 hours",
            "3.5 hours"
        ]
    },
    {
        numb: 10,
        question: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, the slower pipe alone will be able to fill the tank in ?",
        answer: "144 min",
        options: [
            "81 min",
            "108 min",
            "192 min",
            "144 min"
        ]
    },
];

let Probability = [
    {
        numb: 1,
        question: "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?:",
        answer: "9/20",
        options: [
            "1/2",
            "2/5",
            "8/15",
            "9/20"
        ]
    },
    {
        numb: 2,
        question: "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?:",
        answer: "10/21",
        options: [
            "10/21",
            "11/21",
            "2/7",
            "5/7"
        ]
    },
    {
        numb: 3,
        question: "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?:",
        answer: "1/3",
        options: [
            "1/3",
            "3/4",
            "7/19",
            "8/21"
        ]
    },
    {
        numb: 4,
        question: "What is the probability of getting a sum 9 from two throws of a dice?:",
        answer: "1/9",
        options: [
            "1/6",
            "1/8",
            "1/9",
            "1/12"
        ]
    },
    {
        numb: 5,
        question: "Three unbiased coins are tossed. What is the probability of getting at most two heads?:",
        answer: "7/8",
        options: [
            "3/4",
            "1/4",
            "3/8",
            "7/8"
        ]
    },
    {
        numb: 6,
        question: "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?:",
        answer: "3/4",
        options: [
            "1/2",
            "3/4",
            "3/8",
            "5/16"
        ]
    },
    {
        numb: 7,
        question: "In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is::",
        answer: "21/46",
        options: [
            "21/46",
            "25/117",
            "1/50",
            "3/25"
        ]
    },
    {
        numb: 8,
        question: "In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?:",
        answer: "2/7",
        options: [
            "1/10",
            "2/5",
            "2/7",
            "5/7"
        ]
    },
    {
        numb: 9,
        question: "From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?:",
        answer: "1/221",
        options: [
            "1/15",
            "25/57",
            "35/256",
            "1/221"
        ]
    },
    {
        numb: 10,
        question: "Two dice are tossed. The probability that the total score is a prime number is::",
        answer: "5/12",
        options: [
            "1/6",
            "5/12",
            "1/2",
            "7/9"
        ]
    },
];

let Problem_on_Ages = [
    {
        numb: 1,
        question: "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?:",
        answer: "2 times",
        options: [
            "2 times",
            "5/2 times",
            "11/4 times",
            "3 times"
        ]
    },
    {
        numb: 2,
        question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?:",
        answer: "4 years",
        options: [
            "4 years",
            "8 years",
            "10 years",
            "None of these"
        ]
    },
    {
        numb: 3,
        question: "A father said to his son, I was as old as you are at the present at the time of your birth. If the father's age is 38 years now, the son's age five years back was:",
        answer: "14 years",
        options: [
            "14 years",
            "19 years",
            "33 years",
            "38 years"
        ]
    },
    {
        numb: 4,
        question: "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?:",
        answer: "10",
        options: [
            "7",
            "8",
            "9",
            "10"
        ]
    },
    {
        numb: 5,
        question: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?:",
        answer: "24",
        options: [
            "24",
            "27",
            "40",
            "None of these"
        ]
    },
    {
        numb: 6,
        question: "A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is::",
        answer: "22 years",
        options: [
            "14 years",
            "18 years",
            "20 years",
            "22 years"
        ]
    },
    {
        numb: 7,
        question: "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?:",
        answer: "16 years",
        options: [
            "16 years",
            "18 years",
            "20 years",
            "None of these"
        ]
    },
    {
        numb: 8,
        question: "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be::",
        answer: "20 years",
        options: [
            "12 years",
            "14 years",
            "18 years",
            "20 years"
        ]
    },
    {
        numb: 9,
        question: "At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?:",
        answer: "15 years",
        options: [
            "12 years",
            "15 years",
            "19 and half",
            "21 years"
        ]
    },
    {
        numb: 10,
        question: "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?:",
        answer: "24.5 years",
        options: [
            "16 years",
            "18 years",
            "28 years",
            "24.5 years"
        ]
    },
];

let Profit_And_Loss = [
    {
        numb: 1,
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is::",
        answer: "16",
        options: [
            "15",
            "16",
            "18",
            "25"
        ]
    },
    {
        numb: 2,
        question: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?:",
        answer: "70%",
        options: [
            "30%",
            "70%",
            "100%",
            "250%"
        ]
    },
    {
        numb: 3,
        question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?:",
        answer: "5",
        options: [
            "3",
            "4",
            "5",
            "6"
        ]
    },
    {
        numb: 4,
        question: "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?:",
        answer: "Rs.2000",
        options: [
            "Rs.2000",
            "Rs.2200",
            "Rs.2400",
            "None of these"
        ]
    },
    {
        numb: 5,
        question: "A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?:",
        answer: "72",
        options: [
            "Rs. 18.20",
            "Rs. 70",
            "Rs. 72",
            "Rs. 88.25"
        ]
    },
    {
        numb: 6,
        question: "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?:",
        answer: "Rs. 1190",
        options: [
            "Rs. 1090",
            "Rs. 1160",
            "Rs. 1190",
            "Rs. 1202"
        ]
    },
    {
        numb: 7,
        question: "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?:",
        answer: "5.6",
        options: [
            "3.5",
            "4.5",
            "5.6",
            "6.5"
        ]
    },
    {
        numb: 8,
        question: "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is::",
        answer: "Rs. 60",
        options: [
            "Rs. 45",
            "Rs. 50",
            "Rs. 55",
            "Rs. 60"
        ]
    },
    {
        numb: 9,
        question: "When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?:",
        answer: "Rs. 25,300",
        options: [
            "Rs. 21,000",
            "Rs. 22,500",
            "Rs. 25,300",
            "Rs. 25,800"
        ]
    },
    {
        numb: 10,
        question: "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is::",
        answer: "5%",
        options: [
            "No profit, no loss",
            "5%",
            "8%",
            "10%"
        ]
    },
];

// Declared Variable for question and answer

let ques_tag = document.getElementById('que_count')
let questionDiv = document.getElementById('Ques_list')
let option_1 = document.getElementById('option_1')
let option_2 = document.getElementById('option_2')
let option_3 = document.getElementById('option_3')
let option_4 = document.getElementById('option_4')
let question_index = 0;

// load selected Category Wise Question

let questions;
function showQuestion() {
    let category = localStorage.getItem('category_name')

    if (category == 'Pipes and Cisterns') {
        questions = Pipes_and_Cisterns;
    }
    else if (category == 'Probability') {
        questions = Probability;
    }
    else if (category == 'Problem on Ages') {
        questions = Problem_on_Ages;
    }
    else if (category == 'Profit And Loss') {
        questions = Profit_And_Loss;
    }


    //Fetch Question and Options from array

    questionDiv.innerHTML = questions[question_index].question;
    option_1.value = questions[question_index].options[0]
    option_2.value = questions[question_index].options[1]
    option_3.value = questions[question_index].options[2]
    option_4.value = questions[question_index].options[3]


}
showQuestion()

// Change Question on nextbutton as well set QuestionCounter

function changeIndex() {
    time = 0;
    ++question_index;
    if (question_index >= 10) {
        // return;
        window.location.href = "QuizAppResult.html";
        localStorage.setItem('endTime', Date.now())
    }
    let totalQueCounTag = question_index + 1 + "/10";
    document.getElementById('que_count').innerHTML = totalQueCounTag;
    showQuestion();
}

// Set Timer for Question

localStorage.setItem('startTime', Date.now())  //Store Starttime for total time taken

let time = 0
function startTimerLine() {
    function timer() {
        time += 1; //upgrading time value with 1
        if (time >= 30) {
            changeIndex()
        }
        // console.log(time);
        document.getElementById('timer').innerText = time

    }
    const counter = setInterval(timer, 1000);
}
startTimerLine()

//Select Option and Count User Score
let userScore = 0
const option_list = document.getElementById('option_list')

// count Attempted Question
localStorage.setItem('attempted_count', 0)

function optionSelected(answer) {
    localStorage.setItem('attempted_count', Number(localStorage.getItem('attempted_count')) + 1) //count attempted Question 

    //if user clicked on option
    let userAns = questions[question_index].options[answer - 1]; //getting user selected option
    let correcAns = questions[question_index].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    console.log(userAns);
    console.log(correcAns);
    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        document.getElementById(`option_${answer}`).style.backgroundColor = 'green'
        console.log("Correct Answer");

    } else {
        document.getElementById(`option_${answer}`).style.backgroundColor = 'red'
        
        console.log("Wrong Answer");

    }
    console.log(userScore);
    updatescore()
    setTimeout(() => {
        changeIndex()
        document.getElementById(`option_${answer}`).style.backgroundColor = '#ebf4f7'
        document.getElementById(`option_${answer}`).style.color = 'rgb(60, 183, 231)'

    }, 1000);
}

// update & Display User Score
function updatescore() {
    document.getElementById('score').innerHTML = `SCORE:${userScore}`;
    localStorage.setItem('userScore', userScore)
}

// Tab Change alert
var documentTitle = document.title;

        window.addEventListener("blur", function() {
            document.title = "👋 Hi, come back!";
            this.alert('please come back in Quiz')
        });

        window.addEventListener("focus", function() {
            document.title = documentTitle;
        });


