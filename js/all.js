$(document).ready(function() {
    $('.m-menu').click(function(e) {
        e.preventDefault();
        $('.navbar-header-menu').toggleClass("jq-show-menu");
    });
});