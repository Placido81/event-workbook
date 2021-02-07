let red = document.querySelector(".red-box");
   document.body.addEventListener("mousemove", (event) => {
      red.innerHTML = "X axis: " + event.x + " Y axis: " + event.y;
   });