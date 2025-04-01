<script setup></script>

<template>
  <li class="item">
    <span>오늘의 할일리스트1</span>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-pencil"></i>
    <i class="fa-solid fa-trash-can"></i>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  transition: 0.3s;
}
.item:hover {
  background-color: #eae9ee;
}
/* li 체크 클릭됬을 때 */
.item.item_done span {
  opacity: 0.1;
  text-decoration: line-through;
}
.item span,
.item input {
  flex: 1;
}

.fa-check,
.fa-pencil,
.fa-trash-can {
  font-size: 16px;
  transition: 0.3s;
}
.fa-check:hover {
  color: dodgerblue;
}
.fa-pencil:hover {
  color: rgb(10, 163, 10);
  transform: scale(1.1);
}
.fa-trash-can:hover {
  color: red;
  transform: scale(1.1);
}
</style>
