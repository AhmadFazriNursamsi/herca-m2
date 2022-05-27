// main route

var global_hash;
var global_params = [];
const listmenu = ["dashboard", "users", "allposts", "addposts"];

var getCurrentUrl = function() {
    // 0 for hash
    // 1 for param
    // 2 combine for hash and param
    let hash = $(location).prop("hash");
    const params = hash.split("?");
    var par = [];

    global_hash = params[0].replace("#", "");
    if (params.length > 1)
        getCurrentParams(params[1]);
};


var getCurrentParams = function(params) {
    global_params = params.split("&");
}

$(document).ready(function() {
    $(".nav-link-single, .dropdown-item").click(function() {
        global_hash = $(this).attr("href").replace("#", "");
        cloadpages();
    });

    $(".nav-link-duo, .dropdown-item").click(function() {
        global_hash = $(this).attr("href").replace('#', "");
        cloadpages2();
    })
    $(".add-post, .dropdown-item").click(function() {
        global_hash = $(this).attr("href").replace('#', "");
        cloadpages3();
    })
});

function cloadpages() {
    $("#innercontent").html("");
    $("#spinner").addClass("show");
    if (global_hash == '') {
        global_hash = 'dashboard';
    }

    if (listmenu.indexOf(global_hash) == -1)
        global_hash = '404';

    $("#innercontent").load("pages/" + global_hash + "/index.html", function() {
        $("#spinner").removeClass("show");
    });


}


function cloadpages2() {
    $("#innercontent").html("");
    $("#spinner").addClass("show");
    if (global_hash == '') {
        global_hash = 'allposts';

    }

    if (listmenu.indexOf(global_hash) == -1)
        global_hash = '404';


    console.log(global_hash);
    $("#innercontent").load("pages/" + global_hash + "/index.html", function() {
        $("#spinner").removeClass("show");
    });


}

function cloadpages3() {
    $("#innercontent").html("");
    $("#spinner").addClass("show");
    if (global_hash == '') {
        global_hash = 'addposts';

    }

    if (listmenu.indexOf(global_hash) == -1)
        global_hash = '404';


    console.log(global_hash);
    $("#innercontent").load("pages/" + global_hash + "/index.html", function() {
        $("#spinner").removeClass("show");
    });

}

getCurrentUrl();
cloadpages();