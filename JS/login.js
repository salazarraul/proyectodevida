

 
 
    function validar()
    {
        var usuario = document.getElementById("idUser").value;
        var Contraseña = document.getElementById("idPas").value;
        	
// Para poder autenticar usuario y contraseña hacemos uso de if
        if(usuario == "admin" && Contraseña == 12345 )
        {
            alert("Usuario y Contraseña es validos");
            window.location = "../pages/Moviento_Entrada.html";
        }
        
       
        else
        {
            alert("el usuario o contraseña ingresado es incorrecto");
        }
    }



