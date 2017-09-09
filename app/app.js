
  $('.track-row').click(function(event){
    $('.video').show()
    $('.track-row').hide()
    var embedValue = $(event.currentTarget).data('name')
      // $(``).appendTo('.video')
    $('#videoShow').attr('src', embedValue)
  })

  $('.devolver').click(function(){
    $('.track-row').show()
    $('.video').hide()
  })
