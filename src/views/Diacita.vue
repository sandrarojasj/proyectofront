<template>
    <center>
      <br>
    <img width="250px; "  src='../imagenes/micita.png' height="150px;"> 
    <br><br><br>
   <div id="contenedor" class="flex-container"> 
    <div id="centro"> 
     

<br>
<br>
<p>&nbsp;&nbsp;
Continua escogiendo la fecha y hora que se acomode a tu horario y disponibilidad.
<br>
<br>
Recuerda esperar el mensaje para presentar en el puesto de salud al ingresar.</p>

<br>

<v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>



      

 

  

  


        
    


  </div>

  <br>

  <div class="mb-6 row">
    <center>
    <div class="col-md-3">
      <button class="btn btn-primary form-control " @click="iraformulario2()">Siguiente</button>
    </div>
    </center>
  </div>
 
  </div>
  <br>
  <br> 
    </center> 
</template>



<script>

export default {
  name: 'Diacita',
  

  data (){
  
  },

  methods:{
        iraformulario2(){
            this.$router.push('/formulario2')
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
