<template>
  Editar {{$route.params.id}} - {{tarea}}
  <form class="mt-3" @submit.prevent="updateTarea(tarea)">
    <Input :tarea="tarea" />
  </form>
</template>

<script>

import Input from '../components/Input.vue';
import { mapState, mapActions} from 'vuex';
export default {
    components:{
        Input
    },
    computed:{
        ...mapState(['tarea'])
    },
    methods:{
        ...mapActions(['setTarea'])
    },
    created(){
        this.setTarea(this.$route.params.id)
    }

}

</script>

