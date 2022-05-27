(function ($) {
	"use strict";   

    const parts = ["sidebarside", "navbar", "footer"];

    var loadparts = function () {  
    	parts.forEach(function (item, index) {
		  	$("#"+item).load(item + ".html"); 
		});
    };

    loadparts();
})(jQuery);