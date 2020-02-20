$(document).ready(function () {

    // Opens the modal dialog as soon as the page is loaded, also prevents modal closings by clicking outside the window
    $("#introductionModal").modal({
        backdrop: 'static',
        keyboard: false
    })
    
    $("#playButton").click(function () {
        $("#selectionModal").modal("show");
    });


});