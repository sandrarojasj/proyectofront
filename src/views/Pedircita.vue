<template>
    <center>
      <br>
    <img width="250px; "  src='../imagenes/micita.png' height="150px;"> 
    <br><br><br>
   <div id="contenedor"> 
    <div id="centro"> 

<p>&nbsp;&nbsp;Este sitio cuenta con la facilidad de programar citas para la inmunización en contra del Covid-19.
A partir de la problemática sanitaria que se vive en el mundo, debido a la pandemia, hemos creado este sitio para proporcionar la facilidad a toda la ciudadania con la programacion de las citas para la Vacunación en contra del covid-19.

A continuación se encuentran las instrucciones que debe seguir para la programacion de la cita del día de su Vacuna, a demás recuerde ingresar los datos requeridos en los formularios.
<br><br><br>
<b>Instrucciones</b>
<br><br>
<b>1.</b>	Diligencie todos los campos del formulario.<br>
<b>2.</b>Escoja el día que se ajusta a su horario para la inmunizacion.<br>
<b>3.</b>haga click en el botón enviar.<br>
<b>4.</b>Espere el mensaje que se genera con el día, fecha y hora que debe asistir al puesto de salud.
<br><br>

*No es indispensable adjuntar ordenes médicas para solicitar su cita, su requerimiento llegará directamente a nuestro generador de citas, donde revisaremos su solicitud y en caso de que halla algun problema en el proceso, nos pondremos en contacto con usted.
<br><br>

<br>Recuerde diligenciar correctamente sus datos.</p><br>


      <form class="mt-5">
        <div class="mb-6 row">
    <label for="nombre" class="col-sm-2 col-form-label">Nombre:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>

  <div class="mb-6 row">
    <label for="apellidos" class="col-sm-2 col-form-label">Apellidos:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>

  <div class="mb-6 row">
    <label for="fecha de nacimiento" class="col-sm-2 col-form-label">Fecha de Nacimiento:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>

  <div class="mb-6 row">
    <label for="ciudad" class="col-sm-2 col-form-label">Ciudad:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>

<div class="mb-6 row">
    <label for="tipo de documento" class="col-sm-2 col-form-label">Tipo de documento:</label>
    <div class="col-sm-6">
     <select class="form-control">
       <option  value="" > ****Elige tu tipo de documento****</option>
        

        <option  value="cedula" > Cédula </option>

         <option  value="tarjetadeidentidad" > Tarjeta de identidad </option>

          <option  value="pasaporte" > Pasaporte </option>

     </select>
    </div>
  </div>

<div class="mb-6 row">
    <label for="número de documento" class="col-sm-2 col-form-label">Número de documento:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>
  
  <div class="mb-6 row">
    <label for="dirección" class="col-sm-2 col-form-label">Dirección:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>

  <div class="mb-6 row">
    <label for="telefono" class="col-sm-2 col-form-label">Teléfono:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>

   <div class="mb-6 row">
    <label for="correo electronico" class="col-sm-2 col-form-label">Correo eléctronico:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>
  
   <div class="mb-6 row">
    <label for="edad" class="col-sm-2 col-form-label">Edad:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>

    <div class="mb-6 row">
    <label for="sexo" class="col-sm-2 col-form-label">Sexo:</label>
    <div class="col-sm-6">
      
      <select class="form-control">
       <option  value="" > ****Elige tu sexo****</option>

        <option  value="femenino" > Femenino </option>

         <option  value="masculino" > Masculino </option>

     </select>

    </div>
  </div>

  <div class="mb-6 row">
    <label for="Eps" class="col-sm-2 col-form-label">Eps:</label>
    <div class="col-sm-6">
      <input type="text"  class="form-control">
    </div>
  </div>

  <br>

  <div class="mb-6 row">
    <center>
    <div class="col-md-3">
      
      <button class="btn btn-primary form-control " @click="iraformulario2()">Siguiente</button>
    
    </div>
    </center>
  </div>

      </form>
        
  </div>
  <br>
  <br> 
   </div>
    </center> 
</template>



<script>

export default {
  name: 'Pedircita',
  

  data (){
  
  },

  methods:{
        iraformulario2(){
            this.$router.push('/formulario')
        }
  }
}

</script>

<style>
#centro{                           
  height: 1500px;
  width: 700px;
  margin: 0 auto;
  border-radius: 20px;
  border: 5px solid;
  background-color: whitesmoke;
  top: 30px;
  position: relative;
    } 

.tamano{
height: 12px;

}




</style>
