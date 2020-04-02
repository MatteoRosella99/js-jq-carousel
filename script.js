
$('.succ').click(
  immagineDopo
);
$('.prima').click(
  immaginePrima
);
$('.uno').click(
  function(){
    var imgAttivo = $('.immagini > img.attivo');
    imgAttivo.removeClass('attivo');
    var pallinoAttivo = $('.pallini > ul > li.yoyo');
    pallinoAttivo.removeClass('yoyo');
    $('.immagini > img.init').addClass('attivo');
    $('.pallini > ul > li.uno').addClass('yoyo');
  }
)
$('.due').click(
  function(){
    var imgAttivo = $('.immagini > img.attivo');
    imgAttivo.removeClass('attivo');
    var pallinoAttivo = $('.pallini > ul > li.yoyo');
    pallinoAttivo.removeClass('yoyo');
    $('.immagini > img.seconda').addClass('attivo');
    $('.pallini > ul > li.due').addClass('yoyo');
  }
)
$('.tre').click(
  function(){
    var imgAttivo = $('.immagini > img.attivo');
    imgAttivo.removeClass('attivo');
    var pallinoAttivo = $('.pallini > ul > li.yoyo');
    pallinoAttivo.removeClass('yoyo');
    $('.immagini > img.terza').addClass('attivo');
    $('.pallini > ul > li.tre').addClass('yoyo');
  }
)
$('.quattro').click(
  function(){
    var imgAttivo = $('.immagini > img.attivo');
    imgAttivo.removeClass('attivo');
    var pallinoAttivo = $('.pallini > ul > li.yoyo');
    pallinoAttivo.removeClass('yoyo');
    $('.immagini > img.quarta').addClass('attivo');
    $('.pallini > ul > li.quattro').addClass('yoyo');
  }
)
$('.ultimo').click(
  function(){
    var imgAttivo = $('.immagini > img.attivo');
    imgAttivo.removeClass('attivo');
    var pallinoAttivo = $('.pallini > ul > li.yoyo');
    pallinoAttivo.removeClass('yoyo');
    $('.immagini > img.last').addClass('attivo');
    $('.pallini > ul > li.ultimo').addClass('yoyo');
  }
)


function immagineDopo(){
  var imgAttivo = $('.immagini > img.attivo');
  imgAttivo.removeClass('attivo');
  var pallinoAttivo = $('.pallini > ul > li.yoyo');
  pallinoAttivo.removeClass('yoyo');
  if(imgAttivo.hasClass('last')){
    $('.immagini > img.init').addClass('attivo');
    $('.pallini > ul > li.uno').addClass('yoyo');
  }
  else{
    imgAttivo.next().addClass('attivo');
    pallinoAttivo.next().addClass('yoyo');
  }
}
function immaginePrima(){
  var imgAttivo = $('.immagini > img.attivo');
  imgAttivo.removeClass('attivo');
  var pallinoAttivo = $('.pallini > ul > li.yoyo');
  pallinoAttivo.removeClass('yoyo');
  if(imgAttivo.hasClass('init')){
    $('.immagini > img.last').addClass('attivo');
    $('.pallini > ul > li.ultimo').addClass('yoyo');
  }
  else{
    imgAttivo.prev().addClass('attivo');
    pallinoAttivo.prev().addClass('yoyo');
  }
}
