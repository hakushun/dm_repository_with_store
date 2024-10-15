<script setup lang="ts">
import { useTodos } from "../composables/useTodos";

const { todos } = useTodos();
</script>
<template>
  <header>
    <h1>Todo Count: {{ todos?.length ?? 0 }}</h1>
  </header>
</template>
