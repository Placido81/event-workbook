/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
var paper = document.getElementById("output")
document.body.append(paper)

document.onkeydown = function(){
    var keyCode = window.event ? window.event.keyCode : event.which;
    keyEvent(keyCode);
}
function keyEvent(keyCode){
    if( keyCode  == 65){
        paper.innerHTML = "Letter a was pressed. It is keyCode 65.";
    }
}