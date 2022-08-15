<template>
    {{tareas}}
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Categorias</th>
                <th scope="col">Estado</th>
                <th scope="col">Numero</th>
                <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in tareas" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.nombre}}</td>
                <td>
                    <span v-for="(cat, index) in item.categorias" :key="index">
                       
                        {{
                            item.categorias.length === index + 1 ?  cat : cat + ', '
                        }}
                    </span>
                </td>
                <td>{{item.estado}}</td>
                <td>{{item.numero}}</td>
                <td>Accion</td>
            </tr>
            
        </tbody>
    </table>

        
</template>

<script>
import {mapState} from 'vuex'
export default{
    computed:{
        ...mapState(['tareas'])
    }

}

</script>

