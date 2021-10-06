<template>
    <center>
    <img width="500px;"  src='../imagenes/inicio.png'> 
    
   
   <div id="contenedor" class= "flex-container"> 
    <div id="centro"> 
      <div class="mb-6 row">
      
        <estilo>
        <br>
        <br>
        <i>
       <h5><p style= "color:black;"> “Vacuna preventiva contra el COVID"<br>
Lo invitamos a cuidarse, vacúnese, salve su vida y la de su familia.</p></h5>
</i>
<br>
<br>

        <img src= "../imagenes/etapas.png" width="700 px" height="300px">

      </estilo>   
  </div>
  </div>
  <br>
  <br>
    <img id="vacunarse" src="../imagenes/vacunarse.png">
    <br>
    <br>
    
    <div class="mb-6 row">
    <center>
    <div class="col-md-4">
      
      <button class="btn btn-primary form-control " @click="irapedircita()">Agende su cita</button>
     
    </div>
    
    </center>
  </div>
   </div>
    </center>  
</template>

<script>

export default {
  name: 'Vacunacion',
  
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

#centro{ 
                          
  height: 600px;
  width:750px;
  margin: 0 auto;
  border-radius: 20px;
  border: 5px solid;
  background-color: whitesmoke;
  top: 30px;
  position: relative;
    } 

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
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 10px;
  width: 280px;
  height: 120px;
}
#contenedor{
  height: 1000px;
  width: 1000px;
  margin: 0 auto;
    } 

</style>