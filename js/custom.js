
$(document).ready(function(){
    // Sidebar Toggler
    $('.sidebar-toggler-cst').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

    $(".dropdown-item").click(function(){
        event.stopPropagation();
    });

});

function searchLine(a){
	console.log(a);
}