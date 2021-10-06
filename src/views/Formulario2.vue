<template>

  <div id="contenedor" class= "flex-container">
    <div id="centro"> 
      <v-form>
        <div class="mb-6 row">
   
    <br> <br> <br> <br>    

    <n><h1> <center>Formulario 2</center></h1></n>

    <h6>&nbsp; Se requiere diligenciar la siguiente información, para completar el registro de su cita de vacunación.  </h6>
    <br> <br><br>

        </div>
         <p> <b>  &nbsp;&nbsp; 1.</b> ¿Ha experimentado cualquiera de los siguiente síntomas de COVID-19, dentro de las últimas 48 horas? </p>
         <div class="col-sm- ms-4">
      
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> Fiebre o escalofrío. </label><br>
<input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
<label for="vehicle2"> Tos.  </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Falta de aire o dificultad de respirar.</label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Fátiga. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Dolores musculares o del cuerpo. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Dolor de cabeza. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Pérdida del gusto u olfato. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Dolor de garganta. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Malestar general. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Vomito/diarrea. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Ninguna de las anteriores.</label><br>
    </div>
    <br>
    <br>

    <div class="mb-6 row">
    <p> <b>  &nbsp;&nbsp; 2.</b> ¿Ha dado positive en la prueba de COVID-19 en los últimos 10 días? </p> 
  
    <div class="col-sm-4">   
    <v-container id="dropdown-example-3">
    <v-overflow-btn
      class="my-2"
    :items="dropdown_edit"
      placeholder="Elige tu respuesta"
      counter
      item-value="text"
      
    ></v-overflow-btn>
  </v-container>
    </div>
  </div>
  <br>
  <div class="mb-6 row">
   <p> <b>  &nbsp;&nbsp; 3.</b>  ¿Se encuentra actualmente en la espera de los resultados de la prueba de COVID-19?</p> 
    
    <div class="col-sm-4">

        <v-container id="dropdown-example-3">
    <v-overflow-btn
      class="my-2"
    :items="dropdown_edit"
     
      placeholder="Elige tu respuesta"
      counter
      item-value="text"
    ></v-overflow-btn>
  </v-container>
  
    </div>
  </div>
  <br>
  <div class="mb-6 row">
    <p> <b>  &nbsp;&nbsp; 4.</b>¿Se le ha dicho que se sospecha que usted tiene COVID-19 en los últimos 10 días?</p> 
   
   <div class="col-sm-4">

        <v-container id="dropdown-example-3">
    <v-overflow-btn
      class="my-2"
    :items="dropdown_edit"
     
      placeholder="Elige tu respuesta"
      counter
      item-value="text"
    ></v-overflow-btn>
  </v-container>
  
    </div>
  </div>

  <br>
  <div class="mb-6 row">
    <p> <b>  &nbsp;&nbsp; 5.</b>¿Tiene 65 años de edad o más?</p> 
    
    <div class="col-sm-4">

        <v-container id="dropdown-example-3">
    <v-overflow-btn
      class="my-2"
    :items="dropdown_edit"
     
      placeholder="Elige tu respuesta"
      counter
      item-value="text"
    ></v-overflow-btn>
  </v-container>
  
    </div>
  </div>

<br>
 
<div class="mb-4 row">

    <p> <b>  &nbsp;&nbsp; 6.</b> Marque si tiene alguna de las siguientes condiciones de salud:</p>
  
  <div class="col-sm- ms-4">
      
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> Asma/enfermedad pulmonar crónica. </label><br>
<input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
<label for="vehicle2"> Diabetes. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Enfermedad cardíaca.  </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3">Enfermedad renal crónica con tratamiento de diálisis. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Obesidad. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Embarazo. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3">Sistema inmunitario comprometido (VIH/SIDA, cáncer/quimioterapia, 
transplante de órganos o en medicamentos que inhiben el sistema inmunitario).</label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> Ninguno/ Desconocido. </label><br>
<input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
<label for="vehicle3"> otro?  </label><br>

<div class="mb-6 row">
    <label for="especifique cual?" class="col-sm-2 col-form-label"></label>
    <div class="col-sm-8">
      <input type="text"  class="form-control">
    </div>
  </div>

    </div>
  </div>

  <br>

<div class="mb-6 row">
      <p> <b>  &nbsp;&nbsp; 7.</b>¿Presenta alergia a algún medicamento?</p> 
    
    <div class="col-sm-4">
 <v-container id="dropdown-example-3">
    <v-overflow-btn
      class="my-2"
    :items="dropdown_edit"
     
      placeholder="Elige tu respuesta"
      counter
      item-value="text"
    ></v-overflow-btn>
  </v-container>
  
    </div>
  </div>

     <div class="mb-6 row">
      <p> <b>  &nbsp;&nbsp; 8.</b>¿Ya está Vacunado?</p> 
    <div class="col-sm-4">
 <v-container id="dropdown-example-3">
    <v-overflow-btn
      class="my-2"
    :items="dropdown_edit"
     
      placeholder="Elige tu respuesta"
      counter
      item-value="text"
    ></v-overflow-btn>
  </v-container>
  
    </div>
  </div>

  <div class="mb-6 row">
     <p> <b>  &nbsp;&nbsp; 9.</b>¿Número de dosis aplicadas? </p>
    <div class="col-sm-6">
     <select class="form-control">
       <option  value="" > -seleccione-</option>
        

        <option  value="cero" > 0 </option>

         <option  value="una" > 1 </option>

          <option  value="dos" > 2 </option>

     </select>
    </div>
  </div>

<div class="mb-8 row">
     <p> <b>  &nbsp;&nbsp; 10.</b>¿Lugar de Vacunación correspondiente a su eps?</p>
     <div class="col-sm-6">
     <select class="form-control">
       <option  value="" > -seleccione -</option>
        

        <option  value="cero" > Hospital General </option>
         <option  value="una" > Clinica León XVIII </option>

          <option  value="dos" > Clínica Medellín </option>

     </select>
    </div>
  </div>
 




  <div class="mb-6 row">
    <center>
    <div class="col-md-8">
      
<button class="btn btn-primary form-control " @click="iradiacita()">Escoger día de la cita</button>

    </div>
    </center>
</div>    

        </v-form> 
    </div>
  </div>

</template>






<script>
export default {
    data: () => ({
      dropdown_edit: [
        { text: 'si' },
        { text: 'no'},
      ],
    }),

    return: {
        ex7: 'red',
        ex8: 'primary',
      },

    methods:{
        iradiacita(){
            this.$router.push('/diacita')
        }
  }
  
  }
</script>
        
        
//     return:  {
//             Vacunados: [],
//             dismissSecs: 5,
//             dismissCountDown: 0,
//             mensaje: {
//                 color: '',
//                 texto: ''
//             },
//             vacunado: {
//                 nombre: "",
//                 apellido: "",
//                 fechaNacimiento: "",
//                 ciudad: "",
//                 correo: "",
//                 telefono: "",
//                 eps: "",
//                 estadoVacuna: "",
//                 dosisAplicadas: "",
//                 direccion: ""
//             },
//             itemsEstadoV: ['Todos','No vacunado', 'Primera dosís', 'Segunda dosís', 'Con Covid','Vacunado'],
//             editar: false,
//             vacunadoEditar: {},
//             filtroVacunado: "",

//         };
//     },
//     created:() {
//         this.filtroVacunados();

//     },
//     methods: {
//         alerta() {
//             this.mensaje.color = 'success'
//             this.mensaje.texto = 'Probar alerta'
//             this.showAlert();

//         },
//         listarVacunados() {

//             this.axios.get('/vacunados')
//                 .then((response) => {
//                     // console.log(response.data)
//                     this.Vacunados = response.data;
//                 })
//                 .catch((e) => {
//                     console.log('error' + e);
//                 })
//         },

//         filtroVacunados: (criterio2) 
//             var criterio = "Vacunado"
//             var criterio2 = this.filtroVacunado
//              if(criterio2==="Todos"){

//                this.axios.get('/vacunados')
//                 .then((response) => {
//                     // console.log(response.data)
//                     this.Vacunados = response.data;
//                 })
//                 .catch((e) => {
//                     console.log('error' + e);
//                 })
                  
//              }

//              else{

//                this.axios.get(`/filtro/${criterio2}`)

//                 .then((response) => {
//                     console.log(response.data)

//                     this.Vacunados = response.data;
//                 })
//                 .catch((e) => {
//                     console.log('error' + e);
//                 })



//              }

         
//         },

//         filtroVacunados2() {
//             this.axios.get(`/vacunados`)
//                 .then((response) => {
//                     // console.log(response.data)
//                     this.Vacunados = response.data;
//                 })
//                 .catch((e) => {
//                     console.log('error' + e);
//                 })
//         },
//         agregarVacunado() {

//             console.log(this.nota);
//             this.axios.post('/nueva-nota', this.nota)
//                 .then(res => {
//                     this.Vacunados.push(res.data)
//                     this.nota.nombre = "";
//                     this.nota.descripcion = "";
//                     this.mensaje.color = 'success';
//                     this.mensaje.texto = 'Registro agregado';
//                     this.showAlert();
//                     this.tabla();

//                     // alert("Registro agregado");

//                 })
//                 .catch(e => {
//                     console.log(e.response)
//                     if (e.response.data.error.errors.nombre.message) {
//                         this.mensaje.texto = e.response.data.error.errors.nombre.message;
//                     } else {

//                         this.mensaje.texto = 'Error del sistema';

//                     }
//                     this.mensaje.color = 'danger';
//                     //this.mensaje.texto='hubo un error';
//                     this.showAlert();

//                 })

//         },

//         eliminarVacunado(id) {
//             console.log(id);
//             this.axios.delete(`/vacunados/${id}`)
//                 .then(res => {
//                     const index = this.Vacunados.findIndex(item => item._id === res.data._id)
//                     this.Vacunados.splice(index, 1);
//                     this.mensaje.color = 'danger';
//                     this.mensaje.texto = 'Registro eliminado';
//                     this.showAlert();
//                     this.tabla();
//                 }).catch(e => {
//                     console.log(e.response);

//                 })

//         },

//         activarEdicion(id) {
//             this.editar = true;
//             console.log(id);
//             this.axios.get(`/vacunados/${id}`)
//                 .then(res => {
//                     this.vacunadoEditar = res.data
//                     // this.nota.descripcion=res.data.descripcion
//                     // this.nota.nombre=res.data.nombre

//                 }).catch(e => {
//                     console.log(e.response);

//                 })

//         },

//         editarVacunado(item) {
//             this.axios.put(`/vacunados/${item._id}`, item)
//                 .then(res => {
//                     const index = this.Vacunados.findIndex(n => n._id === res.data._id);
//                     this.Vacunados[index].nombre = res.data.nombre;
//                     this.Vacunados[index].apellidos = res.data.apellidos;
//                     this.Vacunados[index].ciudad = res.data.ciudad;
//                     this.Vacunados[index].direccion = res.data.direccion;
//                     this.Vacunados[index].correo = res.data.correo;
//                     this.Vacunados[index].telefono = res.data.telefono;
//                     this.Vacunados[index].eps = res.data.eps;
//                     this.Vacunados[index].dosisAplicadas = res.data.dosisAplicadas;
//                     this.Vacunados[index].estadoVacuna = res.data.estadoVacuna;
//                     this.mensaje.color = 'success';
//                     this.mensaje.texto = 'Persona editada';
//                     this.showAlert();
//                     this.tabla();
//                     this.editar = false

//                 }).catch(e => {
//                     console.log(e.response);

//                 })
//         },

//         tabla() {

//             this.axios.get('/vacunados')
//                 .then((response) => {
//                     // console.log(response.data)

//                     this.tablaL = response.data;

//                 })
//                 .catch((e) => {
//                     console.log('error' + e);
//                 })

//         },

//         editItem(item) {
//             this.editedIndex = this.desserts.indexOf(item)
//             this.editedItem = Object.assign({}, item)
//             this.dialog = true
//         },

//         countDownChanged(dismissCountDown) {
//             this.dismissCountDown = dismissCountDown
//         },
//         showAlert() {
//             this.dismissCountDown = this.dismissSecs
//         },
//         pintar() {

//         },

//     },

//     computed: {

//         imprimir: function () {

//             return (1 + 1);
//         }

//     }

// };

<style>
#centro{ 
                          
  height: 3000px;
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
