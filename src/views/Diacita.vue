<template>
 <center>
<br>
    <img width="250px; "  src='../imagenes/micita.png' height="150px;"> 
    <br><br><br>
   <div id="contenedor" class="flex-container"> 
    <div id="centro"> 

<br>
<br>
<h3><p>&nbsp;&nbsp;
Ahora escoge la fecha y hora de la cita de vacunación.</p></h3>
<br>
<br>
-Recuerda esperar el mensaje para poder ingresar al puesto de salud-
<br>
<br>
<br>
<h4><p>Ingrese la fecha para su cita:</p></h4>
  <div class="position-absolute top-50 start-50 translate-middle">
  <v-row justify="center">
    <v-date-picker
      v-model="date"
      class="mt-4"
    ></v-date-picker>
  </v-row>
</div>
  <br>
<br>  <br>
<br>  <br>
<br>  <br>
<br>
<br>  <br>
<br>  <br>
<br>  <br>
<br>
<br>  <br>
<br>  <br>
<br>  <br>
<br>

  <h4><p>Escoja la hora para su cita:</p></h4>
  
    <input type="time" name="eta">
    <span class="border border-blue"></span>
    <br>
    <br>

      <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >Enviar datos</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            ><h3>Cita de Vacunación</h3></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">
                <center>
                <p><h5><b>¡Las vacunas contra el COVID-19 son seguras, efectivas, y gratis! </b></h5>
                 <br>  
                 <h5> Una vez que haya recibido la vacuna completa, puede participar en muchas de las actividades que disfrutaba con su familia antes de la pandemia. </h5>
              </center> 
              <br>
<div class="mb-4 row">
    <div class="col-sm-2">
      <h5><option  value="" >Nombre del vacunado: </option>
        
        <option  value="cero" >Fecha: </option>

         <option  value="una" >Lugar: </option>

          <option  value="dos" >Dosis: </option></h5>
     </div>
  </div>

<i><h6>"Debe presentar esta información en el momento que se presente en el puesto de salud correspondiente".</h6></i>
      <center>
        <br>
        <h4>Gracias</h4>
      </center>


              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
    <br>      
    <br>

  </div>
</div>
</center>

 </template>



<script>
  export default {
    data: () => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    })

    
   
  }
</script>


 <style>
#centro{                           
  height:1000px;
  margin: 0 auto;
  border-radius: 20px;
  border: 5px solid;
  background-color: whitesmoke;
  top: 30px;
  position: relative;
    } 

#contenedor{
  height: 1000px;
  width: 1000px;
  margin: 0 auto;
    } 

</style>
