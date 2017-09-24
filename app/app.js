var songs = [
  {
    number: 1, name: "Camila Cabello - Havana",url: "https://www.youtube.com/embed/HCjNJDNzw8Y"},
  {
    number: 2, name: "Justin Bieber - Friends",url: "https://www.youtube.com/embed/ctfLLsD84vk"},
  {
    number: 3, name: "Taylor Swift - Look What You Make Me Do",url: "https://www.youtube.com/embed/3tmd-ClpJxA"},
  {
    number: 4, name: "Avicii - With Out You",url: "https://www.youtube.com/embed/WRz2MxhAdJo"},
  {
    number: 5, name: "Michael Jackson - Blood On The Dance Floor X Dangerous",url: "https://www.youtube.com/embed/aXfokSKZ0QA"}
];

 $('body').append('<table></table>');
 for (var i = 0; i < songs.length; i++){
   var songObject = songs[i]
    $('tbody').append('<tr data-video="'+songObject.url+'" name="'+songObject.name+'"><td>'+songObject.number+'</td><td>'+songObject.name+'</td></tr>')
 };

  $('tr').on('click', function(evento){
    var $tr = $(evento.currentTarget)
    var urlVideo = $tr.attr('data-video')
    var nameVideo = $tr.attr('name')
    $('table').hide()

    var h3 = document.createElement("h3");
    h3.innerHTML = (nameVideo)
    document.body.appendChild(h3)

    var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", urlVideo);
        document.body.appendChild(ifrm);

    var btn = document.createElement("button");
    var btnText = document.createTextNode("Regresar a la lista");
        btn.appendChild(btnText);
        document.body.appendChild(btn);

  $('button').on('click', function(){
    $('table').show()
    $('h3').hide()
    $('iframe').hide()
    $('button').hide()
  })
});
