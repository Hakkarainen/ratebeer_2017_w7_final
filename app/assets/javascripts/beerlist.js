var BEERS = {};

BEERS.show = function(){
    $("#beertable tr:gt(0)").remove();

   var beer_list = $("#beertable");

    $.each(BEERS.list, function (index, beer) {

        beer_list.append('<tr>'
            +'<td>'+beer['name']+'</td>'
            +'<td>'+beer['style_id']+'</td>'
            +'<td>'+beer['brewery_id']+'</td>'
            +'</tr>');
    });
};

BEERS.sort_by_name = function(){
    BEERS.list.sort(function(a, b){return a-b});
    // BEERS.list.sort( function(a,b){
    //     return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
};

BEERS.sort_by_style = function(){
    BEERS.list.sort(function(a, b){return a-b});
};

BEERS.sort_by_brewery = function(){
    BEERS.list.sort(function(a, b){return a-b});
};

// BEERS.reverse = function(){
//     BEERS.list.reverse();
// };

$(document).ready(function () {

    if ( $("#beertable").length>0 ) {

        $.getJSON('beers.json', function (beers) {
            BEERS.list = beers;
            BEERS.sort_by_name();
            BEERS.show();
        });

        $("#name").click(function (e) {
            BEERS.sort_by_name();
            BEERS.show();
            e.preventDefault();
        });

        $("#style").click(function (e) {
            BEERS.sort_by_style();
            BEERS.show();
            e.preventDefault();
        });

        $("#brewery").click(function (e) {
            BEERS.sort_by_brewery();
            BEERS.show();
            e.preventDefault();
        });

        // $("#reverse").click(function (e) {
        //     BEERS.reverse();
        //     BEERS.show();
        //     e.preventDefault();
        // });
    }
});

