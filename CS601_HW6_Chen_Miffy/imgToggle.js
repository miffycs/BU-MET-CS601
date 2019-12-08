$(document).ready(function () {

    // add class to all img tags
    $("img").addClass("wrappedElement");

    // hide all images
    $("#hideAll").click(() => {
        $("img").hide("slow");
    });

    // show all images
    $("#showAll").click(() => {
        $("img").show("slow");
    });

    // show all odd images
    $("#showOdd").click(() => {
        $(".wrappedElement").each(function (i) {
            // i starts at 0, so (i % 2 == 0) is odd
            if (i % 2 == 0) {
                $(this).show("slow");
            }
        });
    });

    // show all even images
    $("#showEven").click(() => {
        $(".wrappedElement").each(function (i) {
            // i starts at 0, so (i % 2 != 0) is even
            if (i % 2 != 0) {
                $(this).show("slow");
            }
        });
    });

    // Left shift
    $("#leftShift").click(() => {
        // show all images first
        $("img").show();

        // grab first & last element
        let first = $(".wrappedElement").first();
        let last = $(".wrappedElement").last();

        // parent of images is a div
        // put first img parent div after last img parent div
        $(last).parent().after(first.parent());
    });

    // Right shift
    $("#rightShift").click(() => {
        // show all images first
        $("img").show();

        // grab first & last image
        let first = $(".wrappedElement").first();
        let last = $(".wrappedElement").last();

        // parent of images is a div
        // put last img parent div before first img parent div
        $(first).parent().before(last.parent());
    });

});