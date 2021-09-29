<template>
<v-container>
    <v-layout>

        <h1>Reportes</h1>
    </v-layout>
    <b-alert :show="dismissCountDown" dismissible :variant="mensaje.color" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        {{mensaje.texto}}
    </b-alert>

    <form @submit.prevent="editarVacunado(vacunadoEditar)" v-if="editar">
        <h3>Editar Vacunado</h3>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.nombre" :rules="rules" counter="25" hint="This field uses counter prop" label="Nombre" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.apellido" :rules="rules" counter maxlength="25" hint="This field uses maxlength attribute" label="Apellidos" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.fechaNacimiento" :rules="rules" counter="25" hint="This field uses counter prop" label="Fecha de nacimiento" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.ciudad" :rules="rules" counter maxlength="25" hint="This field uses maxlength attribute" label="Ciudad" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.direccion" :rules="rules" counter="25" hint="This field uses counter prop" label="Dirección" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.correo" :rules="rules" counter maxlength="25" hint="This field uses maxlength attribute" label="Correo" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.telefono" :rules="rules" counter="25" hint="This field uses counter prop" label="Teléfono" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.eps" :rules="rules" counter maxlength="25" hint="This field uses maxlength attribute" label="EPS" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.dosisAplicadas" :rules="rules" counter="25" hint="This field uses counter prop" label="Dosís aplicadas" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="vacunadoEditar.estadoVacuna" :rules="rules" counter maxlength="25" hint="This field uses maxlength attribute" label="Estado de vacuna" required></v-text-field>
                </v-col>

            </v-row>

        </v-form>
        <b-button class="btn-warning my-2 mx-2 btn-block" type="submit">Editar</b-button>
        <b-button class="my-2 btn-block" type="submit" @click="editar=false">Cancelar</b-button>

    </form>

    <v-row>
        <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="itemsEstadoV"  label="Estado de vacuna" v-model="filtroVacunado"></v-select>
        </v-col>
         
        <v-col class="d-flex" cols="12" sm="6">
         <v-btn class="my-2" color="success" elevation="19" @click="filtroVacunados" type="submit">Filtrar</v-btn>
        </v-col>
    </v-row>
    

    <!-- 
          <input type="text" v-model="aqui" placeholder="edíteme">
           <p>El mensaje es: {{ aqui }}</p>
           <h1>El mensaje es: {{ aqui }}</h1> -->

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Fecha de nacimiento</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Correo</th>
                <th scope="col">Teléfono</th>
                <th scope="col">EPS</th>
                <th scope="col">Estado de vacuna</th>
                <th scope="col">Dosís aplicadas</th>
                <th scope="col">Dirección</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in Vacunados" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.apellidos}}</td>
                <td>{{item.fechaNacimiento}}</td>
                <td>{{item.ciudad}}</td>
                <td>{{item.correo}}</td>
                <td>{{item.telefono}}</td>
                <td>{{item.eps}}</td>
                <td>{{item.estadoVacuna}}</td>
                <td>{{item.dosisAplicadas}}</td>
                <td>{{item.direccion}}</td>

                <td>
                    <!-- <b-button class="btn-warning btn-sm mx-2" @click="alerta()">alerta</b-button> -->

                    <!-- <b-button class="btn-warning btn-sm mx-2" @click="activarEdicion(item._id)">Actualizar</b-button> -->
                    <!-- <b-button class="btn-danger btn-sm mx-2" @click="eliminarNota(item._id)">Eliminar</b-button> -->

                    <v-btn class="mx-2" color="accent" id="i" elevation="19" @click="activarEdicion(item._id)">Actualizar</v-btn>
                    <v-btn color="error" mx-2 elevation="19" @click="eliminarVacunado(item._id)">Eliminar</v-btn>
                </td>
            </tr>
        </tbody>
    </table>

</v-container>
</template>

<script>
export default {
    data() {
        return {
            Vacunados: [],
            dismissSecs: 5,
            dismissCountDown: 0,
            mensaje: {
                color: '',
                texto: ''
            },
            vacunado: {
                nombre: "",
                apellido: "",
                fechaNacimiento: "",
                ciudad: "",
                correo: "",
                telefono: "",
                eps: "",
                estadoVacuna: "",
                dosisAplicadas: "",
                direccion: ""
            },
            itemsEstadoV: ['Todos','No vacunado', 'Primera dosís', 'Segunda dosís', 'Con Covid','Vacunado'],
            editar: false,
            vacunadoEditar: {},
            filtroVacunado: "",

        };
    },
    created() {
        this.filtroVacunados();

    },
    methods: {
        alerta() {
            this.mensaje.color = 'success'
            this.mensaje.texto = 'Probar alerta'
            this.showAlert();

        },
        listarVacunados() {

            this.axios.get('/vacunados')
                .then((response) => {
                    // console.log(response.data)
                    this.Vacunados = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },

        filtroVacunados(criterio2) {
            var criterio = "Vacunado"
            var criterio2 = this.filtroVacunado
             if(criterio2==="Todos"){

               this.axios.get('/vacunados')
                .then((response) => {
                    // console.log(response.data)
                    this.Vacunados = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
                  
             }

             else{

               this.axios.get(`/filtro/${criterio2}`)

                .then((response) => {
                    console.log(response.data)

                    this.Vacunados = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })



             }

         
        },

        filtroVacunados2() {
            this.axios.get(`/vacunados`)
                .then((response) => {
                    // console.log(response.data)
                    this.Vacunados = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        agregarVacunado() {

            console.log(this.nota);
            this.axios.post('/nueva-nota', this.nota)
                .then(res => {
                    this.Vacunados.push(res.data)
                    this.nota.nombre = "";
                    this.nota.descripcion = "";
                    this.mensaje.color = 'success';
                    this.mensaje.texto = 'Registro agregado';
                    this.showAlert();
                    this.tabla();

                    // alert("Registro agregado");

                })
                .catch(e => {
                    console.log(e.response)
                    if (e.response.data.error.errors.nombre.message) {
                        this.mensaje.texto = e.response.data.error.errors.nombre.message;
                    } else {

                        this.mensaje.texto = 'Error del sistema';

                    }
                    this.mensaje.color = 'danger';
                    //this.mensaje.texto='hubo un error';
                    this.showAlert();

                })

        },

        eliminarVacunado(id) {
            console.log(id);
            this.axios.delete(`/vacunados/${id}`)
                .then(res => {
                    const index = this.Vacunados.findIndex(item => item._id === res.data._id)
                    this.Vacunados.splice(index, 1);
                    this.mensaje.color = 'danger';
                    this.mensaje.texto = 'Registro eliminado';
                    this.showAlert();
                    this.tabla();
                }).catch(e => {
                    console.log(e.response);

                })

        },

        activarEdicion(id) {
            this.editar = true;
            console.log(id);
            this.axios.get(`/vacunados/${id}`)
                .then(res => {
                    this.vacunadoEditar = res.data
                    // this.nota.descripcion=res.data.descripcion
                    // this.nota.nombre=res.data.nombre

                }).catch(e => {
                    console.log(e.response);

                })

        },

        editarVacunado(item) {
            this.axios.put(`/vacunados/${item._id}`, item)
                .then(res => {
                    const index = this.Vacunados.findIndex(n => n._id === res.data._id);
                    this.Vacunados[index].nombre = res.data.nombre;
                    this.Vacunados[index].apellidos = res.data.apellidos;
                    this.Vacunados[index].ciudad = res.data.ciudad;
                    this.Vacunados[index].direccion = res.data.direccion;
                    this.Vacunados[index].correo = res.data.correo;
                    this.Vacunados[index].telefono = res.data.telefono;
                    this.Vacunados[index].eps = res.data.eps;
                    this.Vacunados[index].dosisAplicadas = res.data.dosisAplicadas;
                    this.Vacunados[index].estadoVacuna = res.data.estadoVacuna;
                    this.mensaje.color = 'success';
                    this.mensaje.texto = 'Persona editada';
                    this.showAlert();
                    this.tabla();
                    this.editar = false

                }).catch(e => {
                    console.log(e.response);

                })
        },

        tabla() {

            this.axios.get('/vacunados')
                .then((response) => {
                    // console.log(response.data)

                    this.tablaL = response.data;

                })
                .catch((e) => {
                    console.log('error' + e);
                })

        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        },
        pintar() {

        },

    },

    computed: {

        imprimir: function () {

            return (1 + 1);
        }

    }

};
</script>

