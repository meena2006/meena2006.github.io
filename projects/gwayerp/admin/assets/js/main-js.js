
jQuery(document).ready(function($) {
    'use strict';

     

    // ============================================================== 
    // Menu Slim Scroll List
    // ============================================================== 


    if ($(".menu-list").length) {
        $('.menu-list').slimScroll({

        });
    }

    
  (function($) {
    "use strict"; 
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sidenav-toggled");
    });
  })(jQuery);

    // ============================================================== 
    // tooltip
    // ============================================================== 
    if ($('[data-toggle="tooltip"]').length) {
            
            $('[data-toggle="tooltip"]').tooltip()

        }

     // ============================================================== 
    // popover
    // ============================================================== 
       if ($('[data-toggle="popover"]').length) {
            $('[data-toggle="popover"]').popover()

    }
    
    

});  

 