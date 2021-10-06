<template>
    <center>
      <br>
    <img width="300px; "  src='../imagenes/noti.jpg' height="200px;"> 
    <br><br><br>
   <div id="contenedor"> 
    <div id="centro"> 
<br>
<br>
<h1><p>&nbsp;&nbsp;Noticias<br><br> </p> </h1>

<h1>el covid-19 </h1>


      

  <br>

  <div class="mb-6 row">
    <center>
    <div class="col-md-3">
      
      <button class="btn btn-primary form-control " @click="irapedircita()">Agende su cita</button>
    
    </div>
    </center>
  </div>

      
        
  </div>
  <br>
  <br> 
   </div>
    </center> 
</template>



<script>

export default {
  name: 'Noticias',
  

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
#centro{                           
  height: 1500px;
  width: 600px;
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
#contenedor{
  height: 1000px;
  width: 1000px;
  margin: 0 auto;
    } 



</style>
