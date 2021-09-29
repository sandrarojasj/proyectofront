<template>
  <v-app>
     <Barra/>
    

      <router-view/>
      <Formulario1/>
  
     <Footer/>
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
