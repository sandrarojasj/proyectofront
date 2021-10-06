<template>
<center>
<div id="contenedor"> 
    <div id="centro"> 
        <estilo>
           <br>
        <h4>
        <p style= "color:black;" size="px"> <h4> Preguntas frecuentes acerca de la vacuna contra el Covid-19</h4> <br><br></p></h4> 
      </estilo>

  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>1. ¿Cómo hago una cita para vacunarme?</v-expansion-panel-header>
      <v-expansion-panel-content>
        
      Debes ingresar al sitio web Gestor de Citas, hacer una cuenta, luego completar los formularios requeridos y programar una cita según tu disponibilidad.
      
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>2. ¿Mi vacuna contra el COVID-19 es gratuita?</v-expansion-panel-header>
      <v-expansion-panel-content>
        Sí, la vacunación es totalmente gratuita. El Gobierno de Colombia, está proporcionando la vacuna en forma gratuita a todas las personas, independiente de su estado migratorio y si tienen o no segúro médico.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>


<v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>3. ¿Son seguras las vacunas contra el COVID-19?</v-expansion-panel-header>
      <v-expansion-panel-content>
        Sí, las vacunas contra el COVID-19 son seguras y efectivas. Millones de personas en el mundo, han recibido estas vacunas bajo el control de seguridad requerido. Las autoridades competentes recomiendan que se vacunen tan pronto como una vacuna este disponible para usted.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

<v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>4 ¿Cuentas dosis debo recibir?</v-expansion-panel-header>
      <v-expansion-panel-content>
        La cantidad de dosis necesarias, esto depende de la vacuna que reciba. 
Para obtener una protección óptima:<br>
•	Deben administrarse dos dosis de la vacuna de Pfizer-BioNTech con un intervalo de 3 semanas (21 días).<br>
•	Deben administrarse dos dosis de la vacuna de Moderna con un intervalo de 1 mes (28 días).<br>
•	La vacuna Janssen de Johnson & Johnson, requiere la administración de una sola dosis.<br>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>5. ¿Cuanto tiempo debo esperar para vacunarme contra la influenza?</v-expansion-panel-header>
      <v-expansion-panel-content>
        Puede vacunarse contra el COVID-19 junto con otras vacunas, incluida la de la influenza, en la misma visita. 
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>6. -¿Si ya túve covid y me recuperé, debo vacunarme de todas maneras?</v-expansion-panel-header>
      <v-expansion-panel-content>
        Sí, debería vacunarse.<br> 
La vacunación le brinda protección inclúso si ya tuvo COVID-19.<br>
Si usted tiene antecedentes de síndrome inflamatorio multisistémico en adultos o niños (MIS-A o MIS-C), considere postergar la vacunación hasta que se recupere de la enfermedad y durante 90 días después de la fecha del diagnóstico.

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>7. -¿Si tengo covid en este momento, me puedo vacunar?</v-expansion-panel-header>
      <v-expansion-panel-content>
       No. Las personas con COVID-19 que tienen síntomas deben esperar para vacunarse hasta haberse recuperado de la enfermedad y hasta que reúnan los criterios para suspender el aislamiento; las personas sin síntomas también deben esperar hasta que reúnan los criterios para vacunarse. Esta pauta alcanza también a las personas que se enferman de COVID-19 antes de su segunda dosis de la vacuna.

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>8. ¿Puedo elegir que vacuna recibir?</v-expansion-panel-header>
      <v-expansion-panel-content>
        Sí. Todas las vacunas contra el COVID-19 autorizadas y recomendadas actualmente son seguras y efectivas.<br>
La decisión más importante que puede tomar es vacunarse contra el COVID-19 lo antes posible. <br>
Las personas deben tener en cuenta que se ha notificado el riesgo de una enfermedad poco frecuente denominada síndrome de trombosis-trombocitopenia, luego de recibir la vacuna contra el COVID-19 de J&J/Janssen. <br>
El TTS es una afección grave que genera coágulos sanguíneos con conteo de plaquetas bajo. Este problema no es tan frecuente y la mayoría de los informes fueron de mujeres de entre 18 y 49 años. En el caso de las mujeres de 50 años de edad o más y los hombres de todas las edades, este problema es incluso menos frecuente. Existen otras opciones de vacunas contra el COVID-19 disponibles para las que no se ha observado este riesgo (Pfizer-BioNTech, Moderna).

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>9. ¿Debo usar una mascarilla y evitar el contacto cercano con los demás si ya recibí la vacuna?</v-expansion-panel-header>
      <v-expansion-panel-content>
        Después de completar el esquema de vacunación contra el COVID-19, tome estas medidas para protegerse y proteger a los demás:<br>
•	En general, no es necesario que use mascarilla al aire libre.<br>
•	Si se encuentra en un área con muchos casos de COVID-19, considere usar mascarilla en espacios al aire libre muy concurridos y cuando tiene contacto cercano con otras personas que no están totalmente vacunadas.<br>
•	Si tiene una afección o toma medicamentos que debilitan su sistema inmunitario, es posible que no esté totalmente protegido incluso si tiene la vacuna completa. Debería seguir tomando todas las precauciones recomendadas para las personas no vacunadas, como usar una mascarilla que se ajuste bien al rostro, hasta que su médico le indique lo contrario.<br>
•	Si está totalmente vacunado, para obtener la máxima protección contra la variante delta y evitar contagiar a los demás, use una mascarilla en público si se encuentra en espacios cerrados.<br>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

<v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>10. ¿Puedo vacunarme si estoy embarazada?</v-expansion-panel-header>
      <v-expansion-panel-content>
        Sí, se recomienda vacunar contra el COVID-19 a todas las personas de 12 años de edad o más, incluídas las personas que están embarazadas y en periodo de lactancia, además las mujeres que están intentando quedar embarazadas ahora o que podrían quedar embarazadas en el futuro. 
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

<br>
<br>
<br>
<br>
<br>
  </div>
    <br>
  <div class="mb-2 row">
    <center>
    <div class="col-md-2">
<button class="btn btn-primary form-control" @click="irapedircita()"> Agende su cita </button>

    </div>
    </center>
</div>    
    <br> 
   </div>

  </center>
</template>


<script>

export default {
  name: 'Preguntasfrecuentes',
  
  data (){
  
  },

  methods:{
        irapedircita(){
         window.location.href="/pedircita"
        }
  }
}

</script>

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



#centro{                           
  height: 850px;
  width: 800px;
  margin: 0 auto;
  border-radius: 20px;
  border: 5px solid;
  background-color: rgb(250, 251, 251);
  top: 30px;
  position: relative;
} 

#contenedor{
  height: 1000px;
  width: 1000px;
  margin: 0 auto;
    } 

#Titulo{
  margin-top:200px;
  size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
 
}



</style>

