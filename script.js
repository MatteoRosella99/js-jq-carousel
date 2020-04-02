
$('.succ').click(
  immagineDopo
);
$('.prima').click(
  immaginePrima
);

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
