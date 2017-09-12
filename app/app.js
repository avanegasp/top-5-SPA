
  $('td').click(function(){
    $('#list').hide()
    $('.music').show()
  })

  if($('.uno').click(function(){
    $('#uno').show()
    $('#dos').hide()
    $('#tres').hide()
    $('#cuatro').hide()
    $('#cinco').hide()
  }))

  if($('.dos').click(function(){
    $('#dos').show()
    $('#uno').hide()
    $('#tres').hide()
    $('#cuatro').hide()
    $('#cinco').hide()
  }))

  if($('.tres').click(function(){
    $('#tres').show()
    $('#uno').hide()
    $('#dos').hide()
    $('#cuatro').hide()
    $('#cinco').hide()
  }))

  if($('.cuatro').click(function(){
    $('#cuatro').show()
    $('#uno').hide()
    $('#dos').hide()
    $('#tres').hide()
    $('#cinco').hide()
  }))

  if($('.cinco').click(function(){
    $('#cinco').show()
    $('#uno').hide()
    $('#dos').hide()
    $('#tres').hide()
    $('#cuatro').hide()
  }))


  $('button').click(function(){
    $('#list').show()
    $('.music').hide()
  })
