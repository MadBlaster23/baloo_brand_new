$(function() {
  
    // contact form animations
    $('#getQuote').click(function() {
        $('#booking').fadeToggle();
    });
    $(document).mouseup(function (e) {
        var container = $("#booking");
  
        if (!container.is(e.target)
        && container.has(e.target).length === 0) {
            container.fadeOut();
        }
    }); 
});
