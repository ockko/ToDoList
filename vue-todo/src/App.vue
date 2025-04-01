<script setup>
import { reactive } from 'vue'
import HeaderLayout from './components/HeaderLayout.vue'
import DateContainer from './components/DateContainer.vue'
import TodoItem from './components/TodoItem.vue'
import FooterLayout from './components/FooterLayout.vue'

const todos = reactive([])
const addTodo = (newTodo) => {
  todos.push({
    id: Date.now(),
    text: newTodo,
    completed: false,
    createAt: new Date().toLocaleDateString(),
  })
}
</script>

<template>
  <HeaderLayout />
  <DateContainer />
  <ul class="items">
    <TodoItem v-for="todo in todos" :key="todo.id" @add-todo="addTodo" />
  </ul>
  <FooterLayout />
</template>

<style scoped>
.items {
  padding: 1rem;
  height: 500px;
  overflow-y: auto;
}
</style>
