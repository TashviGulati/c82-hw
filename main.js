canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="red";
var mouseEvent="empty";
var lastPositionOfX,LastPositionOfY;
widthOfLine=2;;



canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseEvent="mouseDown";
    
    
}

canvas.addEventListener("mouseup",mymouseUp);
function mymouseUp(e){
    mouseEvent="mouseUp";

}

canvas.addEventListener("mouseleave",mymouseLeave);
function mymouseLeave(e){
    mouseEvent="mouseLeave";

}

canvas.addEventListener("mousemove",mymouseMove);
function mymouseMove(e){
    currentPositionOfMouseX=e.clientX-canvas.offsetLeft;
    currentPositionOfMouseY=e.clientY-canvas.offsetTop; 
    if(mouseEvent=="mouseDown")  {
        ctx.beginPath();
        ctx.strokeStyle=color
        ctx.lineWidth=widthOfLine;
        ctx.moveTo(lastPositionOfX,LastPositionOfY);
        ctx.arc(currentPositionOfMouseX,currentPositionOfMouseY,20,0,360);
        ctx.stroke();
    }
    lastPositionOfX=currentPositionOfMouseX;
    LastPositionOfY=currentPositionOfMouseY;
}