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

    // toggle all odd images
    $("#toggleOdd").click(() => {
        $(".wrappedElement").each(function (i) {
            // i starts at 0, so (i % 2 == 0) is odd
            if (i % 2 == 0) {
                $(this).toggle("slow");
            }
        });
    });

    // toggle all even images
    $("#toggleEven").click(() => {
        $(".wrappedElement").each(function (i) {
            // i starts at 0, so (i % 2 != 0) is even
            if (i % 2 != 0) {
                $(this).toggle("slow");
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

        // parent of images is table cell td containing img
        // put first img element before last img element
        $(last).parent().after(first.parent());
    });

    // Right shift
    $("#rightShift").click(() => {
        // show all images first
        $("img").show();

        // grab first & last image
        let first = $(".wrappedElement").first();
        let last = $(".wrappedElement").last();

        // parent of images is table cell td containing img
        // put last element before first
        $(first).parent().before(last.parent());
    });

});