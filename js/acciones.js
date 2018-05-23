// JavaScript Document
//Ready
$(document).ready(function(e) {
   document.addEventListener("deviceready",function(){//Escuchador de enventos
	    $('#izquierda').on("swipeleft", function(){//Desliza hacia la Izquierda
			navigator.notification.alert("Deslizó hacia la Izquierda",function(){"aplicacion7","OK"});
                                                  });
		 $('#derecha').on("swiperight", function(){//Desliza hacia la derecha
			 navigator.notification.confirm("¿Qué quieres hacer?",function(op){//Aparece ek mensaje de confirmación
           switch(op)
           {
           	 case 1:
           	 navigator.notification.beep(2);//Suena el dispositivo
             break;
 
             case 2:
           	 navigator.notification.vibrate(3000);//Vibra el dispositivo
             break;  	
           }
       },"aplicacion7","Beeper,Vribrar,Cancelar");
          
                                                                                });



                                                    },false);//cierre deviceready
                                                      });//cierre del ready