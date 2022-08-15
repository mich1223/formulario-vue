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
    cargar(state, payload){
      state.tareas=payload
    },
    set(state, payload){
      state.tareas.push(payload)
      
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)//filtramos todos los ids distintos al id que le estamos enviando 
    },
    tarea(state, payload){
      state.tarea = state.tareas.find( item => item.id === payload)
    }
  },
  actions: {
    cargarLocalStorage({commit}){

      if(localStorage.getItem('tareas')){
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit ('cargar', tareas )
        return
      }
      localStorage.setItem('tareas', JSON.stringify([]))
    },
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
