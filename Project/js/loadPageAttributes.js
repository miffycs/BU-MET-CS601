const url_header_footer = "https://gist.githubusercontent.com/miffycs/3918490c03cd9a1e96926973f636b102/raw/685721a6c2a990254f3ae8fb6b9084db3bccd570/page_attributes.html";

$(document).ready(() => {
    $("nav").load(`${url_header_footer} nav`);
    $("footer").load(`${url_header_footer} #footer-details`);
});
