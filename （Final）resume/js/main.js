var loadContent = function(dom){
  var page = $(dom).attr("data-page");
  $("#myFrame").remove();
  $(".nav-link").removeClass("active");
  $(`.nav-link[data-page=${page}]`).addClass("active");
  $("#container").append(`<iframe src='${page}.html' frameborder="0" id="myFrame">`);
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onload = function(){
  loadContent($(`.nav-link[data-page=about]`));
}

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#back").fadeIn();
  } else {
    $("#back").fadeOut();
  }
};