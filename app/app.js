
  $('tr').click(function(evento){
  $('#list').hide()
  var tr = $(evento.currentTarget)
  var dataAtrr = tr.attr('data-artist')

  $('section').removeClass('active')
  $(dataAtrr).addClass('active')
})

  $('button').click(function(){
  $('#list').show()
  $('section').removeClass('active')
})
