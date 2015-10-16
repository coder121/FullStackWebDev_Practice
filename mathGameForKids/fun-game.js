
var scoreCounter=0;

function loadup(){
	var level=get_radio_value()
   var textDiv= document.getElementById("textDiv");
	  var div = document.getElementById("textDiv");
 var h1=document.createElement("h1");
 

 var quizDiv=document.createElement("div");
 quizDiv.id="quizDiv"
 var body=document.createElement("body")
textDiv.appendChild(quizDiv)

startQuiz(quizDiv,level)
   


}
function startQuiz(div,level){
	clearDivElements(div);
    var x,y;
    if(level=="easy"){
 x=Math.floor(Math.random()*10);
 y=Math.floor(Math.random()*10);
}
else if(level=="medium"){
     x=Math.floor(Math.random()*50);
 y=Math.floor(Math.random()*50);
}
else if(level=="difficult"){
     x=Math.floor(Math.random()*250);
 y=Math.floor(Math.random()*250);
}
 var timer=document.getElementById("timer")
   
    
     var p=document.createElement("p")
    var someString=x+"+"+y+"="
    p.textContent=someString
    div.appendChild(p)
    var textfield=document.createElement("input")
    textfield.type="number"
    textfield.id="ans"
    p.appendChild(textfield)
    var submit=document.createElement("input")
    submit.type="submit"
    submit.id="submit"
    div.appendChild(submit)
    timer.style.display="block";
    div.appendChild(timer)
    testing();
    submit.onclick=function check(){
    		if(textfield.value==(x+y)){
    			alert("Awesome thats right!")
                scoreCounter+=1;
    			startQuiz(div,level);
    		}
    		else{
    			alert("Thats wrong.Game Over!!\nYOUR SCORE:"+scoreCounter)
    			var item = document.getElementById("quizDiv");
    			item.parentNode.removeChild(item);
    		}
    }

}
function clearDivElements(div){
	 var theNode = document.getElementById(div.id);
	   
	for (var i=0;i<theNode.childNodes.length;i++){
         theNode.removeChild(theNode.firstChild);
    }
            }


function get_radio_value() {
            var inputs = document.getElementsByName("level");
            for (var i = 0; i < inputs.length; i++) {
              if (inputs[i].checked) {
                return inputs[i].value;
              }
            }
          }
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var time=setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            alert("GAME OVER!!!\nSCORE:"+scoreCounter)
             clearInterval(time);
        }
    }, 1000);
   
}

 function testing() {
    var fiveMinutes = 30 * 1,
        display = document.querySelector('#time');
   startTimer(fiveMinutes, display);
    console.log("jere")
  
};
