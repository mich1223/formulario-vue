<template>
  <form @submit.prevent="procesarFormulario">
  <Input :tarea="tarea"/>
  </form>
  <hr>
  <!--<p>tarea: {{tarea}}</p>  muestra los datos de los inputs-->
  <ListaTareas />
</template>

<script>
// @ is an alias to /src
import ListaTareas from '@/components/ListaTareas.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Input from '@/components/Input.vue'
import { mapActions } from 'vuex'
const shortid = require('shortid')//llamando a shortid 

export default {
  name: 'HomeView',
  components: {
    Input, ListaTareas
},
    data(){
      return{
        tarea:{ /*objeto */
          nombre:'', /*propiedad */
          categorias: [],
          estado:'', /*Es string y no vector porque los 'radio' solo puede seleccionarse 1 */
          numero:0
        }
      }
    },
    methods:{
      ...mapActions(['setTareas']),
      procesarFormulario(){
        if(this.tarea.nombre.trim() === ''){
            console.log('nombre Vacío')
            return
        }
        console.log(this.tarea)
        
        //Generar id
        this.tarea.id = shortid.generate()
        console.log(this.tarea.id)
        
        //Enviar los datos
        this.setTareas(this.tarea)

        //Limpiar Datos
        this.tarea ={
          id:'',
          nombre:'', 
          categorias: [],
          estado:'', 
          numero: 0
        }
      }
    },
   
}
</script>
