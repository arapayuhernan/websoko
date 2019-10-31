$(document).ready(function(){
    var usuario = $('#usuario');
    var password = $('#password');
    $('#botones').click(function(){
      if(usuario=="sokolocsi"&&password=="123"){
        alert('Bienvenido');

      } else{
          alert('Usuario y Contraseña INCORRECTAS');
      }



    })
});
