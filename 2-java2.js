document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value); //Getting the value of the checked input
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
	   
	   
	   result = variable + sub + con + ifstate;
	   
    document.getElementById("grade").innerHTML = result;
    
if (result === 0) {result2 = "Keep Googling!"};
if (result === 25) {result2 = "You need to spend more time on that Google site"};
if (result === 50) {result2 = "I think you could do better. Google again."};
if (result === 75) {result2 = "So close. Try another search."};
if (result === 100) {result2 = "You are a Google Pro!<br /><img src='http://ads4growth.com/wp-content/uploads/2013/05/google-certified-300x235.gif' width='300' />"};
document.getElementById("grade2").innerHTML = result2; 


	   


return false; // required to not refresh the page; 
} // ends the submit function


