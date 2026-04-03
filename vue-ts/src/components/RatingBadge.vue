<script setup lang="ts">
const props = defineProps<{
  score: number;
}>();
</script>

<template>
  <span>評価: {{ props.score }}</span>
</template>
