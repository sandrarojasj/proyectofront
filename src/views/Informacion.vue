<template>
<div class="colorfondo">
<v-app> 
  <v-container>

    <center>
    <img width="350px;"  src='../imagenes/info.jpg' height="200px"> 
   <div id="contenedor"> 
    <div id="centro"> 
        <estilo>
         <i>
           <br>
        <h4>
        <p style= "color:LightGray;" size="px"> Información de las diferentes vacunas contra el COVID-19 <br><br>
 </p></h4> 
 </i>
        <img src= "../imagenes/comparacion.png" width="600" height="1000">

      </estilo>
          
  </div>
  <br>
  <br>
    <img id="vacunarse" src="../imagenes/yomevacuno.png" >
    <br>
  
    <button class="boton">Agende su cita</button> 
    <br> 
   </div>
    </center>
  </v-container>
</v-app>
 </div>   
</template>

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

.colorfondo {
  background: linear-gradient(to right, rgb(088, 197, 202), white);
  background-size: cover ;
  background-repeat: no-repeat;
  background-color: hsl(220, 10%, 77%)
}

#centro{                           
  height: 1150px;
  width: 700px;
  margin: 0 auto;
  border-radius: 20px;
  border: 5px solid;
  background-color: rgb(000, 054, 061);
  top: 30px;
  position: relative;
} 

#contenedor{
  height: 1000px;
  width: 1000px;
  margin: 0 auto;
    } 
.colorfondo {
  background: linear-gradient(to right, rgb(088, 197, 202), white);
  background-size: cover ;
  background-repeat: no-repeat;
  background-color: hsl(220, 10%, 77%)
}

#Titulo{
  margin-top:200px;
  size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}



</style>