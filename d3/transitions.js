function animate_this(){
	animate_those("leftSide")
	animate_those("rightSide")
}
			
function animate_those(side){
	var theLeftSide =document.getElementById(side);
	var data=[10];
	var canvas=d3.select(theLeftSide)
				.append("svg")
				.attr("width",500)
				.attr("height",500)
	var circle=canvas.append("circle")		
					.attr("cx",50)
					   .attr("cy",50)
					   .attr("r",25)
var circle2=canvas.append("circle")		
					.attr("cx",50)
					   .attr("cy",460)
					   .attr("r",25)
					   	var square=canvas.append("square")	


		var circle3=canvas.append("circle")		
					.attr("cx",460)
					   .attr("cy",460)
					   .attr("r",25)	
		var circle4=canvas.append("circle")		
					.attr("cx",460)
					   .attr("cy",50)
					   .attr("r",25)	
		/* */	


					   	<!-- animate the circle-->				   
	circle.transition()
		.duration(1500)	<!-- specify the duration -->
		.delay(2000) <!-- specify the delay as in when to start -->
		.attr("cx",300) <!-- moves the circle in right direction -->
		.transition() 	<!-- new transition-->
		.attr("cy",200) <!-- moves down-->
		.transition()
		.attr("r",100) <!-- change radius-->
		.transition()
		.attr("fill","red") <!-- change color-->
		.transition()
		.attr("r",25)	<!-- change radius-->	
		.transition()
		.attr("fill","black") <!-- change color-->
		.transition() 	<!-- new transition-->
		.attr("cx",340)
		.transition()
		.attr("fill","yellow")


circle2.transition()
		.duration(1500)	<!-- specify the duration -->
		.delay(2000) <!-- specify the delay as in when to start -->
		.attr("cx",320) <!-- moves the circle in right direction -->
		.transition() 	<!-- new transition-->
		.attr("cy",200) <!-- moves down-->
		.transition()
		.attr("r",100) <!-- change radius-->
		.transition()
		.attr("fill","red") <!-- change color-->
		.transition()
		.attr("r",25)	<!-- change radius-->	
		.transition()
		.attr("fill","black") <!-- change color-->
		.transition()<!-- specify the delay as in when to start -->
		.attr("cx",60) 
		.transition()
		.attr("fill","red")

circle3.transition()
		.duration(1500)	<!-- specify the duration -->
		.delay(2000) 
		.attr("cx",210)
		.transition()<!-- specify the delay as in when to start -->
		.attr("cy",200) <!-- moves down-->
		.transition()
		.attr("r",100) <!-- change radius-->
		.transition()
		.attr("fill","yellow") <!-- change color-->
		.transition()
		.attr("r",25)	<!-- change radius-->	
		.transition()
		.attr("fill","black") <!-- change color-->
		.transition()<!-- specify the delay as in when to start -->
		.attr("cx",460) <!-- moves down-->
		.transition()
		.attr("fill","red")
		

circle4.transition()
		.duration(1500)	<!-- specify the duration -->
		.delay(2000)
		.attr("cx",230) <!-- specify the delay as in when to start -->
		.transition()
		.attr("cy",200) <!-- moves down-->
		.transition()
		.attr("r",100) <!-- change radius-->
		.transition()
		.attr("fill","yellow") <!-- change color-->
		.transition()
		.attr("r",25)	<!-- change radius-->	
		.transition()
		.attr("fill","black")
		.transition() 	<!-- new transition-->
		.attr("cx",210)
			.transition()
		.attr("fill","yellow")
		 <!-- change color-->	
		 
}
