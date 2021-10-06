<template>
    
    <section class= "">
        <h1 id="GCM" >Gestor de Citas. </h1 >
      <div id="centro"> 
        
      <img id="vacuna" src="../imagenes/vacunacion.jpg" alt="vacunacion">
      <img id="citas" src="../imagenes/citologia.jpg" alt="citologia">
      <img id="medicacion" src="../imagenes/mejor.jpg" alt="mejor">
      <button class="botones-inicio" @click="irapaginavacunacion()">Vacunación</button>
      <button class="botones-pedircita" @click="irapaginapedircita()">Pedir Cita</button>
      <button class="botones-informacion" @click="irapaginainformacion()"> Información</button>
      </div>


  

</section>
</template>

<script>
export default {
    data() {
        
    },
    methods:{
        irapaginavacunacion(){
            this.$router.push('/vacunacion')
        },
        irapaginapedircita(){
          this.$router.push('/pedircita')
        },
        irapaginainformacion(){
          this.$router.push('/informacion')
        },
        irapaginausuario(){
          this.$router.push('/usuario')
        },
    }
}    
</script>
<style>

section{
  position: absolute;

   width: 100%; 
  margin: -160px auto;

}

#centro{                           
  height: 400px;
  width: 500px;
  margin: 0 auto;
  border-radius: 20px;
  border: 5px solid;
  background-color: rgb(000, 054, 061);
  top: 30px;
  position: relative;
    } 
	 
#contenedor{
  height: 750px;
  width: 500px;
  margin: 0 auto;
    } 

ul  {
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0;
  left: 0;
  
  background: linear-gradient(to right, rgb(39, 150, 156), white);
align-items: center;
justify-content: center;
}


nav > ul {
  display: flex;
  align-items: center;
      border: 5px solid #bbb;

}
li {
  float: left;
  
}
li > .cerrar:hover{
display: block;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 27px 35px;
  text-decoration: none;

}
#usuario{
  height: 65px;
  width: 65px;
  position: left;

}

#logo{
  left: 0;
  height: 70px;
  width: 70px;
}
li a:hover {
  background-color: #111;
}

#vacuna, #citas, #medicacion{
  margin-top: 45px;
  margin-left: 10px;
  border-radius: 20px;
  width: 150px;
  height: 183px;
  
}

.botones-inicio {
    text-align: center;
    background-color: rgb(255, 255, 255);
  
    color: rgb(11, 12, 11);
    padding: 13px 19px;
    display: inline-block;
    margin: 10px 7px 5px 10px;
    font-size: 20px;
}

.botones-pedircita {
    text-align: center;
    background-color: rgb(255, 255, 255);
  
    color: rgb(11, 12, 11);
    padding: 13px 19px;
    display: inline-block;
    margin: 10px 7px 5px 20px;
    font-size: 20px;
}

.botones-informacion {
    text-align: center;
    background-color: rgb(255, 255, 255);
  
    color: rgb(11, 12, 11);
    padding: 13px 19px;
    display: inline-block;
    margin: 10px 10px 10px 20px;
    font-size: 20px;
}
#GCM{
  margin-top:200px;
  size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}


</style>