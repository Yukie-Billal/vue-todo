import {createStore} from 'vuex'

export default createStore({
   state() {
      return {
         todos: []
      }
   },
   actions: {
      saveTodo(context, todo) {
         context.state.todos.push(todo)
      }
   }
})