<template>
 <input type="text" 
    class="form-control my-2"
    placeholder="Nombre tarea"
    v-model.trim="tarea.nombre" 
    > <!--v-model guarda el texto del input  en "texto".....  .trim limpia el v-model-->
    <p>{{tarea.nombre}}</p> <!--Devuelve el texto del input-->
    <!-- checkbox -->
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="Check1" v-model="tarea.categorias" value="Javascript">
        <label class="form-check-label" for="Check1"   >
          Javascript
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox"  id="check2" v-model="tarea.categorias" value="Nodejs">
        <label class="form-check-label" for="check2" >
          NodeJs
        </label>
    </div>
    <div class="mt-2"> 
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="radio1" v-model="tarea.estado" value="Urgente" checked>
        <label class="form-check-label" for="radio1">
          Urgente
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exampleRadios" id="radio2" v-model="tarea.estado" value="Relax">
        <label class="form-check-label" for="radio2">
          Relax
        </label>
      </div>
    </div>
    <div class="mt-2">
      <input type="number" class="form-control" placeholder="numero" v-model.number="tarea.numero">
    </div>
     <button class="btn btn-dark mt-2 btn-block" 
     type="submit" :disabled="bloquear">
      Procesar 
    </button>
 
</template>

<script>
export default{
    props:{
      tarea: Object
    },
     computed:{
      bloquear(){
        return this.tarea.nombre.trim() === "" ? true : false
      }
    }

}

</script>

