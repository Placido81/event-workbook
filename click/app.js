// make the box disapear when the user clicks it


var paper = document.getElementById("red-box")
paper.classList.add("red-box");
document.body.append(paper)

paper.addEventListener("click",function(){
  paper.style.display= "none"
})