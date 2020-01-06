$(document).on("click",".global-nav a",function(e){
    e.preventDefault();
    var id = $(this).attr("href"),
        topSpace = 44;
//alert(id);
    $('html, body').animate({
      scrollTop: $(id).offset().top - topSpace
    }, 800);
});
