var source = $('#entry-template').html();
var template = Handlebars.compile(source);

Handlebars.registerHelper('enumeracion', function(pvalor, operador, svalor){

  pvalor = parseFloat(pvalor);
  svalor = parseFloat(svalor);

  var operadores={
    '+' : pvalor + svalor,
    '*' : pvalor * svalor,
    '-' : pvalor - svalor
  }

  return operadores[operador]

})

var artists = [
              {'artista': 'Justin Bieber - Friends','video':'https://www.youtube.com/embed/jXodFS8-XXI'},
              {'artista': 'Taylor Swift - Look what you make me do','video': 'https://www.youtube.com/embed/jXodFS8-XXI'},
              {'artista': 'Camila Cabello - Havana','video': 'https://www.youtube.com/embed/jXodFS8-XXI'},
              {'artista': 'Kard - Hola Hola','video': 'https://www.youtube.com/embed/jXodFS8-XXI'},
              {'artista': 'Maddix - Showdown ','video': 'https://www.youtube.com/embed/jXodFS8-XXI'}
            ];

var html= template({'music': artists});
$('.container').html(html);


$('td').click(function(){
  $('td').hide()
})
