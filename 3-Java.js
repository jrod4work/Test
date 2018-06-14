var cities = [
    {name: "Austin", Population: 842},
    {name: "Fort Worth", Population: 777},
    {name: "Lubbock", Population: 236}
    ];

    for (var i = 0; i<cities.length; i++) {
        document.getElementById("name" + i).innerHTML= cities[i].name;
        document.getElementById("bartext" + i).innerHTML= cities[i].Population;
        document.getElementById("bar" + i).style.width = cities[i].Population/10 + "%";
        };
        