<template>
  <v-app>
    
  
      <div class="contenedorouter">

      
      <div class="contenedorbarra">
        <Barra/> 
      </div>

      <div class="contenedorcontenido">
         <router-view/>
      </div>

      <div class="contenedorfooter">
          <Footer/>
      </div>
        
      </div>
  
   
  </v-app>

</template>


<script>


import Barra from './components/Barra.vue'
import Footer from './components/Footer.vue'
import Formulario1 from './components/Formulario1.vue'

export default {
  name: 'App',
  components:{
    Barra,
   
    Footer,


  },

  data: () => ({
    //
  }),
};
</script>

<style>
.contenedorouter{


  width:100%;
  height:850px;
  display:flex;
  flex-direction: column;
}

.contenedorbarra{
  width:100% ;
  height: 10% ;

}

.contenedorcontenido{
  width:100% ;
  height:60% ;
  background: linear-gradient(to right, rgb(088, 197, 202), white);
  background-size: cover ;
  background-repeat: no-repeat;
  background-color: hsl(220, 10%, 77%);
  overflow-y: scroll;
  

}

.contenedorfooter{
  width:100% ;
  height:25% ;
  
}









</style>
