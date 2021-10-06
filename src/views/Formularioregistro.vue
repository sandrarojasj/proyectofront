<template>

<div id="contenedor" class= "flex-container">
    <div id="centro"> 
      <v-form>
        <div class="mb-6 row">
   
    <br> <br> <br> <br>    

    <n><h2> <center>Formulario de Registro o autenticacion</center></h2></n>

    <h6>&nbsp; Se requiere diligenciar la siguiente información, para que pueda acceder a programar su cita de vacunacion y de esta manera tenga acceso a este portal para que contine informandose de los que pasa con el Covid-19.  </h6>
    <br> 
    <br><br>
    <br><br>

        </div>
         
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Abrir
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h3><span class="text-h5"> <b>Regístrese con nosotros y acceda a su cita de <br>
          vacunación totalmente gratis. </b></span></h3> 
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Nombre*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Apellidos*"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Telefono*"
                  hint=""
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>

            <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Ciudad*"
                  required
                ></v-text-field>
              </v-col>

          

              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Dirección*"
                  required
                ></v-text-field>
              </v-col>

               <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Celular*"
                  required
                ></v-text-field>
              </v-col>
              
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Fecha de nacimiento*"
                  required
                ></v-text-field>
              </v-col>
              

              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-45', '46-56', '57-65', '65+']"
                  label="Edad*"
                  required
                ></v-select>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Cedula de ciudadanía', 'Tarjeta de identidad', 'Pasaporte']"
                  label="Tipo de documento de identidad"
                  multiple
                ></v-autocomplete>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Número de documento de identidad*"
                  required
                ></v-text-field>
              </v-col>


             <v-col cols="12">
                <v-text-field
                  label="Correo Eléctronico*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              

              <v-col cols="12">
                <v-text-field
                  label="Contraseña*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*Todos los campos son requeridos para el proceso de la vacunación</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  <!-- <div class="mb-6 row">
    <center>
    <div class="col-md-8">
      
<button class="btn btn-primary form-control " @click="agendesucita()">Escoger día de la cita</button>

    </div>
    </center>
</div>     -->

        </v-form> 
    </div>
  </div>

</template>


<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>




<style>
#centro{ 
                          
  height: 450px;
  width:1500px;
  margin: 0 auto;
  border-radius: 20px;
  border: 5px solid;
  background-color: whitesmoke;
  top: 30px;
  position: relative;
    } 

h1 {
  margin-bottom: 50px;
}
.input [type=checkbox]{
  display: none;
}
label {
  font-size: 1 em;
  color: gray;
}
.input [type=checkbox]+label{
  cursor:pointer;
}
label:before {
  content: '';
  background: transparent;
  border: 4 px solid #88c64b;
  border-radius: 25px;
  display: inline-block;
  height: 95 px;
  margin-right:20 px;
  text-align: center;
  vertical-align: middle;
  width: 95 px;
} 

.flex-container > div {
  background-color: #f1f1f1;
  margin: 30px;
  flex-direction: column;
  display: flex;
  height: 300px;
  flex-direction: row;
  justify-content: center;
  padding: 50px;
  font-size: 20px;
} 
 .flex-container {
  display: flex;
  justify-content: center;
} 


</style>
