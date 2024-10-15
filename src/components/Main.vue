<script setup lang="ts">
import { ref } from "vue";
import { useTodos } from "../composables/useTodos";

const { addTodo } = useTodos();

const todo = ref("");

const handleSubmit = (event: Event) => {
  event.preventDefault();
  addTodo(todo.value);
  console.log("Form submitted", todo.value);
  todo.value = "";
};
</script>

<template>
  <main>
    <form @submit="handleSubmit">
      <input type="text" name="todo" id="todo" v-model="todo" />
      <button type="submit">Add Todo</button>
    </form>
  </main>
</template>
