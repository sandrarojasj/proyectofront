<template>
   <header class="header1"> 
<div id="header">
<nav class= "navbar-collapse" id="navbarColor">
  
      <ul class="nav" style="padding-right: 700px;">
          <li>
            <img id="logo" src="../imagenes/logo1.png" >

          </li>
          <li class="nav-item">
            <a href="/principal">Inicio</a>
          </li>

          <li class="nav-item">
            <a href="/noticias">Noticias</a>
          </li>
          
          <li class="nav-item">
            <a href="/preguntasfrecuentes">Preguntas Frecuentes</a>
          </li>
            
          <li>

        <form class="d-flex" style= "position: relative; left: 373px;">
  
          <input style="background-color: rgb(196,237,237);" class="btn" type="search"  placeholder="Search" aria-label="Search">
          <button style="background-color: rgb(187,247,235);" class="btn" type="submit">Buscar</button>
        </form>
          </li>
          <li><img @click="irapaginaconfigurarperfil()" id="usuario" src="../imagenes/Sin-perfil.jpg" alt="user"  style="
    left: 500px;
    position: relative;
    cursor: pointer;
"> 
          </li>
      </ul>
      </nav>
</div>
</header>
</template>

<script>
export default {
  data(){

  },
  methods:{
  
        irapaginaconfigurarperfil(){
            alert("Configirar perfil")
        }, 

  }
}
</script>


<style>


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
      width: 2000px;

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

}

#logo{
  left: 0;
  height: 70px;
  width: 70px;
  display: flex ;
  float:left;
}

li a:hover {
  background-color: #111;
}


#GCM{
  margin-top: 70px;
  size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.header1{

  height: 100px;
}

</style>
