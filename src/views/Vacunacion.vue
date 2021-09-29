<template>
<div class="colorfondo">
<v-app> 
  <v-container>

    <center>
    <img width="500px;"  src='../imagenes/inicio.png'> 
   <div id="contenedor"> 
    <div id="centro"> 
        <estilo>
        
        <i>
        <p style= "color:LightGray;"> “Vacuna preventiva contra el COVID"<br>
Lo invitamos a cuidarse, vacúnese, salve su vida y la de su familia. </p>
 </i>

        <img src= "../imagenes/etapas.png" width="450" height="200">

      </estilo>   
  </div>
  <br>
  <br>
    <img id="vacunarse" src="../imagenes/vacunarse.png">
    <br>
  
    <button class="boton">Agende su cita</button>  
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
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 10px;
  width: 190px;
  height: 90px;
}

.colorfondo {
  background: linear-gradient(to right, rgb(088, 197, 202), white);
  background-size: cover ;
  background-repeat: no-repeat;
  background-color: hsl(220, 10%, 77%)


}


</style>