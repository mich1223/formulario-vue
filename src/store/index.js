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
    }
  },
  actions: {
    setTareas({commit}, tarea){ //Llenar el array con tareas 
      commit('set', tarea)
    }
  },
  modules: {
  }
})
