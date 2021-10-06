<template>
  <v-container
    fluid
    style="height: 300px"
  >
    <v-row justify="center">
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="green
              "
              size="50"
            >
              <span class="white--text text-h6">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="green"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h5>{{ user.fullName }}</h5>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Editar Perfil
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Cerrar sesión
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      user: {
        initials: 'UJ',
        fullName: 'Usuario Jaramillo ',
        email: 'usuario.jaramillo@hotmail.com',
      },

  name: 'usuario',
  
  methods:{
        iraprincipal(){
         window.location.href="/principal"
        },
  }
})
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

#contenedor{
  height: 1000px;
  width: 1000px;
  margin: 0 auto;
    } 

</style>