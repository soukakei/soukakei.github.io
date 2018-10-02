var swiper = new Swiper('.banner',{
      spaceBetween: 30,
      centeredSlides: true,
      pagination:'.banner .swiper-pagination',
      autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer:true,
      observeParents:true,
});
d3.text("src/res/data/xys.txt","text/tab-separated-values;charset=gb2312",function(error,txtdata){
  if (error) 
    return console.error(error);
  d3.select("#xys")
    .append("p")
    .text(txtdata);
});
d3.text("src/res/data/vue.txt","text/tab-separated-values;charset=gb2312",function(error,txtdata){
  if (error) 
    return console.error(error);
  d3.select("#vue")
    .append("p")
    .text(txtdata);
});
d3.text("src/res/data/xcx.txt","text/tab-separated-values;charset=gb2312",function(error,txtdata){
  if (error) 
    return console.error(error);
  d3.select("#xcx")
    .append("p")
    .text(txtdata);
});
d3.text("src/res/data/me.txt","text/tab-separated-values;charset=gb2312",function(error,txtdata){
  if (error) 
    return console.error(error);
  d3.select("#ame")
    .append("pre")
    .text(txtdata);
});