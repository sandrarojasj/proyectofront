<template>
    <center>
    <img width="350px;"  src='../imagenes/info.jpg' height="200px"> 
   <div id="contenedor"> 
    <div id="centro"> 
        <estilo>
         
           <br>
        <h4>
        <p style= "color:black;" size="px"> <h4> Aquí puede encontrar información, acerca de las diferentes Vacunas contra el COVID-19</h4> <br><br></p></h4> 

        <img src= "../imagenes/comparacion.png" width="80%" height="80%">

      </estilo>
          
  </div>
  <br>
  <br>
    <img id="vacunarse" src="../imagenes/yomevacuno.png" >
    <br>
  
    <br>
  <div class="mb-6 row">
    <center>
    <div class="col-md-8">
      
<button class="btn btn-primary form-control " @click="irapedircita()">Agende su cita</button>

    </div>
    </center>
</div>    
    <br> 
   </div>
    </center>  
</template>

<script>

export default {
  name: 'Informacion',
  
  data (){
  
  },

  methods:{
        irapedircita(){
         window.location.href="/pedircita"
        }
  }
}

</script>

<style>


#botones-regreso{
  text-align: center;
    background-color: rgb(255, 255, 255);
  
    color: rgb(0, 0, 0);
    padding: 10px 15px;
    display: inline-block;
    margin: 10px 7px 5px 10px;
    font-size: 20px;
}

.p {
  font-family: "Fantasy";
}

#vacunarse  {
  margin-top: 5px;
  margin-left: 20px;
  border-radius: 10px;
  width: 100px;
  height: 90px;
}

#centro{                           
  height: 1300px;
  width: 800px;
  margin: 0 auto;
  border-radius: 20px;
  border: 5px solid;
  background-color: rgb(250, 251, 251);
  top: 30px;
  position: relative;
} 

#contenedor{
  height: 1000px;
  width: 1000px;
  margin: 0 auto;
    } 

#Titulo{
  margin-top:200px;
  size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
 
}



</style>