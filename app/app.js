

$('.track-row').click(function(event){
  $('.track-row').toggle()
  var embedValue = $(event.currentTarget).data('name')
    $(`<iframe width="640"
    height="360" src="${embedValue}"
    frameborder="0" allowfullscreen></iframe>`).appendTo('.video')
})

$('.devolver').click(function(){
  $('.track-row').show()
  $('.video').hide()
})
