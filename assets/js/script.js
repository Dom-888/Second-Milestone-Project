$(document).ready(function() {

    // Run the following code as soon as the page is loaded
    $(".modal-introduction").modal("show")

    $("#playButton").click(function(){
        $(".modal-introduction").modal("hide");
    });



});