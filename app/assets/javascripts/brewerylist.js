var BREWERIES = {};

BREWERIES.show = function(){
     $("#brewerytable tr:gt(0)").remove();

    var table = $("#brewerytable");

    $.each(BREWERIES.list, function (index, brewery) {
        table.append('<tr>'
            +'<td>'+brewery['name']+'</td>'
            +'<td>'+brewery['year']+'</td>'
            +'<td>'+brewery['beers.count']+'</td>'
            +'<td>'+brewery['active']+'</td>'
            +'</tr>');
    });
};

BREWERIES.sort_by_name = function(){
    BREWERIES.list.sort(function(a, b){return a-b});
    //BREWERIES.list.sort( function(a,b){
        //return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
};

BREWERIES.sort_by_year = function(){
    BREWERIES.list.sort(function(a, b){return a-b});
};

BREWERIES.sort_by_beercount = function(){
    BREWERIES.list.sort(function(a, b){return a-b});
};

// BREWERIES.reverse = function(){
//     BREWERIES.list.reverse();
// };

$(document).ready(function () {

    if ( $("#brewerytable").length>0 ) {

        $.getJSON('breweries.json', function (breweries) {
            BREWERIES.list = breweries;
            BREWERIES.sort_by_name();
            BREWERIES.show();
        });


        $("#name").click(function (e) {
            BREWERIES.sort_by_name();
            BREWERIES.show();
            e.preventDefault();
        });

        $("#year").click(function (e) {
            BREWERIES.sort_by_year();
            BREWERIES.show();
            e.preventDefault();
        });

        $("#beercount").click(function (e) {
            BREWERIES.sort_by_beercount();
            BREWERIES.show();
            e.preventDefault();
        });

        $("#active").click(function (e) {
            BREWERIES.show();
            e.preventDefault();
        });

        // $("#reverse").click(function (e) {
        //     BREWERIES.reverse();
        //     BREWERIES.show();
        //     e.preventDefault();
        // });

    }

});