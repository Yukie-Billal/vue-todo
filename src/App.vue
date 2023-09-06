<script>
import {mapActions, mapState} from 'vuex'
export default {
  data() {
    return {
      todo: '',
    }
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapActions(['saveTodo']),
    handleSubmit(e) {
      e.preventDefault();
      this.saveTodo(this.todo)
    }
  },
}
</script>

<template>
  <form @submit="handleSubmit">
    <input type="text" v-model="todo">
    <button>Simpan</button>
  </form>
  <ul>
    <li v-for="(t) in todos">
      {{ t }}
    </li>
  </ul>
</template>