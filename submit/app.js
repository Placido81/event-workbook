// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

var submit = document.getElementById("submit-me")
submit.addEventListener("submit", (e) => {
  e.preventDefault() 
  var name = document.getElementById("name").value
  alert(name);

var age = document.getElementById("age").value
  alert(age)
})