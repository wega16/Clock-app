	console.log(`Hello World `);
	function ShowTime(){
	let time = new Date(), 
	hours = time.getHours(), 
	minut = time.getMinutes(),
	second = time.getSeconds(),
	months =time.getMonth();
	console.log(months);
	
	let clock =document.getElementById("Cl");
	let hourInp =document.getElementById("Cl-1");
	let minInp=document.getElementById("Cl-2");
	let secInp =document.getElementById("Cl-3");
	
	clock.textContent= hours+ " : " + minut +" : " + second +"   AM" ;
	/*
	hourInp.textContent= hours+" : ";
	minInp.textContent= minut+" : ";
	secInp.textContent= second +" AM ";
	*/
	
	if(hours>12) 
	clock.textContent= (hours-12) + " : " + minut +" : " + second +"  PM";
	
	}
	
	
	window.onload= function() {
	setInterval(ShowTime,500);
	}
	
	
	let Text =document.querySelector(".text"),
	Num =document.querySelector(".num"),
	Max = Text.getAttribute("maxlength"),
	post=document.querySelector(".post"),
	B=document.querySelector(".B");
	
	           ////////////////////////
	
	Text.oninput = function(){
	Num.innerHTML=Max-this.value.length;
	//post.innerHTML=Text.value;
	}
	      ////////////////////////////
	      
	B.onclick = function(){
	post.innerHTML=Text.value;
	Text.value="";
	Num.innerHTML=Max;
	
	}
	