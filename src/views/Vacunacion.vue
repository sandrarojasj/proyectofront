<template>
    <center>
    <img width="500px;"  src='../imagenes/inicio.png'> 
   <div id="contenedor"> 
    <div id="centro"> 
        <estilo>
        
        <i>
        <p style= "color:LightGray;"> “Vacuna preventiva contra el COVID"<br>
Lo invitamos a cuidarse, vacúnese, salve su vida y la de su familia. </p>
 </i>

        <img src= "../imagenes/etapas.png" width="400" height="200">

      </estilo>   
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
            this.$router.push('/pedircita')
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
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 10px;
  width: 280px;
  height: 120px;
}


</style>