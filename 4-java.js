 //everything is within this onsubmit function. Executes on form submit
 document.getElementById("form1").onsubmit = function () {

    //these lines get the value from the form and put it in a variable. the || indicates a 0 if empty.
    work = parseFloat(document.getElementById('workvar').value) || 0;
    eat = parseFloat(document.getElementById('eatvar').value) || 0;
    sleep = parseFloat(document.getElementById('sleepvar').value) || 0;

    //total
    total = work + eat + sleep;
    difference = 24 - total;

    //if total is more than 24, gives a message
    if (total > 24) {
        document.getElementById("total").innerHTML = "Total is " + total + ". Day only has 24 hours."

    }// end if

    //if total is less than 24 hours, executes the rest
    else {
        document.getElementById("total").innerHTML = total;
        document.getElementById("difference").innerHTML = difference;


        //JSON array of objects that hold data for chart
        things = [{ name: "work", val: work, color: "#116b68fa" },
        { name: "eat", val: eat, color: "#64da57" },
        { name: "sleep", val: sleep, color: "#130e2b" }
        ];


        // loops through JSON to get width, name and color for each bar.
        for (i = 0; i < things.length; i++) {
            document.getElementById(things[i].name + "div").style.width = things[i].val * 50 + "px";
            document.getElementById(things[i].name + "div").style.backgroundColor = things[i].color;
            document.getElementById(things[i].name + "div").innerHTML = Math.round((things[i].val / 24) * 100) + "%";
            document.getElementById(things[i].name + "text").innerHTML = things[i].name;

        }//end for
    }  //end else
    return false;

} // end function