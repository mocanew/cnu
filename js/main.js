$(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    $(document).on("contextmenu", function (event) {
        event.preventDefault();
    });
});