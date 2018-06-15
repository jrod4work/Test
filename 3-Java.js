var cities = [
    {name: "Austin", Population: 842, Units: 354, Households: 322, income:660, tip: "live music capital"},
    {name: "Fort Worth", Population: 777, Units: 291, Households: 257, income:500, tip: "near Dallas"},
    {name: "Lubbock", Population: 236, Units: 95, Households: 86, income:200, tip: "TX Tech"},
    {name: "Madrid", Population: 900, Units: 500, Households: 600, income:800, }
    ];
    
    var measures = Object.keys(cities[0]);

    
    function writeData(x) {
        for (var i = 0; i<cities.length; i++) {
        document.getElementById("name" + (i)).innerHTML= eval("cities[i]." + measures[0]);
        document.getElementById("bartext" + (i)).innerHTML= eval("cities[i]." + measures[x]);
        document.getElementById("bar" + (i)).style.width = eval("cities[i]." + measures[x])/10 + "%";
        document.getElementById("bar" + (i)).title= eval("cities[i]." + measures[4]); 
        }
        //city and tip do not need to change for each measure. 
    
        // this area inserts the Category as a heading 
        //document.getElementById("cat").innerHTML = "<strong>" + measures[x] + "</strong>";
    };
    
    writeData(1); // this is where we call the function the first time. 
    
    // function to change based on dropdown
function selMeasure() { // function that writes the data based on the dropdown selection
    var m = document.getElementById("sel").value;
    writeData(m); 
    };
    
    $( document ).ready(function() {
        $("[title]").tooltip();
         });

         $("[title]").tooltip({offset: [10, -30]});
