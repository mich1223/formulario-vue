import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas:[], //Almacena cada una de las tareas
    tarea : { /*objeto */
    nombre:'', /*propiedad */
    categorias: [],
    estado:'', /*Es string y no vector porque los 'radio' solo puede seleccionarse 1 */
    numero:0
  }
  },
  getters: {
  },
  mutations: {
    set(state, payload){
      state.tareas.push(payload)
      console.log(state.tareas)
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)//filtramos todos los ids distintos al id que le estamos enviando 
    },
    tarea(state, payload){
      state.tarea = state.tareas.find( item => item.id === payload)
    }
  },
  actions: {
    setTareas({commit}, tarea){ //Llenar el array con tareas 
      commit('set', tarea)
    },
    deleteTareas({commit}, id){
      commit ('eliminar', id)
    },
    setTarea({commit}, id){
      commit('tarea', id)
    }  
    },
  modules: {
  }
})
