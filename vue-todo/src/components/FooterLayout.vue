<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const emit = defineEmits(['add-todo'])
const addTodo = () => {
  const text = newTodo.value
  if (!text) return
  emit('add-todo', text)
  newTodo.value = ''
}
</script>

<template>
  <footer class="footer">
    <input type="text" class="footer_input" v-model.trim="newTodo" @keyup.enter="addTodo" />
    <i class="fa-solid fa-plus" @click="addTodo"></i>
  </footer>
</template>

<style scoped>
.footer {
  background: rgba(237, 193, 211);
  background: linear-gradient(
    166deg,
    rgba(237, 193, 211, 1) 0%,
    rgba(219, 192, 216, 1) 35%,
    rgba(127, 188, 242, 1) 100%
  );
  border-radius: 0 0 20px 20px;
}

.footer_input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 1rem 1rem 1.25rem;
}

.fa-plus {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin: auto;
  font-size: 1.5rem;
  background-color: black;
  border-radius: 50%;
  color: white;
  transition: 0.3s;
  transform: translateY(-10px);
  cursor: pointer;
}

.fa-plus:hover {
  transform: translateY(-15px) scale(1.1);
}
</style>
