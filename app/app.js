
$('.track-row').click(function(event){
  $('.track-row').toggle()
  var embedValue = $(event.currentTarget).data('angie')
  $(`<iframe width="640"
  height="360" src="${embedValue}"
  frameborder="0" allowfullscreen></iframe>`).appendTo('.video')
  console.log('hasta acá');

})


// $('.track-row-number').click(function(){
//   $('.track-row').toggle()
//   // $('.one').css('display', 'none')
//   $('.one').show('slow')
//
// })
