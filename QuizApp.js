// Set Category name
function click1(category_name) {

  window.location.href = "QuizAppQuestion.html"
  localStorage.setItem('category_name', category_name)
}

// Store Username in localStorage
function saveUser() {

  let username = document.getElementById('enter').value;
  localStorage.setItem('username', username)
  document.getElementById('username').innerHTML = username;
}

// Enable Category div on enter button
var dis_category = document.getElementById('category');
var enter_name = document.getElementById('enter');
var submitButton = document.getElementById('enter_btn');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  if (enter_name.value === '') {
    dis_category.style.display = 'none';
  }
  else {
    dis_category.style.display = 'block'
  }
});

// Tab Change Alert
var documentTitle = document.title;

window.addEventListener("blur", function () {
  document.title = "👋 Hi, come back!";
  this.alert('please come back in Quiz')
});

window.addEventListener("focus", function () {
  document.title = documentTitle;
});












