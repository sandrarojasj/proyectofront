<template>
  <v-app>
     <Barra/>

      <router-view/>
  
     <Footer/>
  </v-app>
</template>

<script>


import Barra from './components/Barra.vue'
import Footer from './components/Footer.vue'
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
