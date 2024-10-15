<script setup lang="ts">
import { useTodos } from "../composables/useTodos";

const { todos } = useTodos();
</script>

<template>
  <nav>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </nav>
</template>
