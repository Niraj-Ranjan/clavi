$.get(datahostaddress + "/rates", function (rates) {
    //console.log(rates);
    $.get(datahostaddress + "/canteen/data/available.json", function (availableitems) {
        //console.log(availableitems);
        for (var category in availableitems) {
            var innerdata = "";
            //console.log(rates[category]);

            for (var item in availableitems[category]) {
                //console.log(availableitems[category][item]);

                //console.log(rates[category]);
                var itemname = availableitems[category][item];
                //console.log(itemname);
                innerdata = innerdata.concat("<div class='col s6 m3'><div class='card'><div class='card-image tiny'><img src='" + datahostaddress + "/canteen/images/" + category + "/" + itemname + ".png'><span class='card-title text-shadow truncate'>" + itemname + "</span></div><div class='card-action'><a href='#'>Rs. " + rates[category][itemname] + "</a></div></div></div>");
            }
            //console.log(category);
            document.getElementById(category).innerHTML = innerdata;
        }

    });
    $.get(datahostaddress + "/canteen/data/trending.json", function (trendingitems) {
        //console.log(availableitems);
        var innerdata = "";
        for (var itemname in trendingitems) {

            //console.log(rates[category]);


            //console.log(trendingitems[category][itemname]);

            //console.log(rates[category]);
            var itemcategory = trendingitems[itemname];
            //console.log(itemname);
            innerdata = innerdata.concat("<div class='col s6 m3'><div class='card'><div class='card-image tiny'><img src='" + datahostaddress + "/canteen/images/" + itemcategory + "/" + itemname + ".png'><span class='card-title text-shadow truncate'>" + itemname + "</span></div><div class='card-action'><a href='#'>Rs. " + rates[itemcategory][itemname] + "</a></div></div></div>");
            //console.log(itemcategory);
            //console.log(rates[itemcategory]);
            //console.log(category);

        }
        document.getElementById("trending").innerHTML = innerdata;

    });
});
