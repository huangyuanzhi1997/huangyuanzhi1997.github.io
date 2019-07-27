//----自定义js----------------

function createImgEventFullScreen() {
  var imgs = $(".post-body").find("img");
  console.log(imgs);
  for(var i = 0;i < imgs.length;i++) {
    // $(imgs[i]).click(createCover(imgs[i]));
    imgs[i].onclick= function(e) {
      var src = e.srcElement.currentSrc;
      createCover(src)
    }
  }
  function createCover (src) {
    console.log(src);
    var cover = $("<div id='fullScreenCover' class='zhao-cover-img-container'><img class='zhao-cover-img' src='"+src+"'/></div>");
    $("#fullScreenCover").remove();
    $("body").append(cover);
    $("body").addClass("zhao-no-scroll");
    $("#fullScreenCover").click(function(){
      $("#fullScreenCover").remove();
      $("body").removeClass("zhao-no-scroll");
    })
  }
}
setTimeout(function(){
  createImgEventFullScreen();
},1000)