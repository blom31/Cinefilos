/* === esta  primera línea del documneto garantiza que todos los elemntos del html esten cargados en el DOM   */
document.addEventListener('DOMContentLoaded', function() {


/*  =========== = = =  V A L I D A R   F O R M U L A R I O   D E   T I C K E T S  = = = ========*/
   
    /* Defino constantes y variables  */
     /* traigo el objeto formulario2 para acceder a sus valores */
    const formulario2 = document.getElementById('formulario2');
    const estudiante = 0.20;
    const trainee = 0.50;
    const junior = 0.85;
    const entrada = 200;
    
    /* traigo el boton-resumen para validar los campos del formulario*/ 
    document.getElementById('resumen-button').addEventListener('click',validarFormulario2);
    document.getElementById('resumen-button').addEventListener('click',totalPagar);
    
    
    /* defino una función para obtener los valores de los campos a validar*/
        function validarFormulario2(e){
            e.preventDefault();
            /*  identifico las variables de los campos a analizar*/
            let nombre = document.getElementById('Nombre').value;
            let apellido = document.getElementById('Apellido').value;
            let correo = document.getElementById('Correo').value;
            let cantidad = document.getElementById('Cantidad').value;
            let validar =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                          
            /* si los campos de las variables están vacios se lanza una alerta*/
            if (nombre === ""){
                alert('El campo Nombre es obligatorio');
                }else if(apellido === ""){
                     alert('El campo Apellido es obligatorio');
                    } else if (correo === ""){
                        alert('El campo Correo es obligatorio');
                    } else if (!validar.test(correo)) { // aquí agregamos la condición para validar el correo
                        alert('El campo Correo no tiene un formato válido');
                    }   else if(cantidad === ""){
                            alert('El campo Cantidad es obligatorio');
                    }
               /* evita que se  mande el formulario vacio en caso de que haya algún servidor o mail a enviar los datos*/
           }
            
        /*  =========== = = =  C A L C U L A R    M O N T O    A    P A G A R  = = = ========*/
       

        function totalPagar(){
            
            /* obtengo los id de los campos a calcular*/
            let cantidad = document.getElementById('Cantidad').value;
            let categoria = document.getElementById('Categoria').value;
            let totalPagar = document.getElementById('totalPagar');
            let total = 0;
            /*uso el SWITCH para calcular el monto segun categoria*/
            switch (categoria){
                case 'Estudiante':  
                    total = (entrada * estudiante)* cantidad;
                    break;
                case 'Trainee':   
                    total = ( entrada * trainee) * cantidad;
                    break;
                case 'Junior':
                    total = (entrada * junior) * cantidad;
                    break;
            }
            /*asigno al campo totalpagar el monto calculado*/
            totalPagar.value = "Total a Pagar: $" + total.toFixed(2);
      }
      
     
      
})/* esto cierra la funcion del DOM*/