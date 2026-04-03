<script setup lang="ts">
import { ref } from "vue";
import type { ReviewItem } from "../types/review";

const emit = defineEmits<{
  submit: [payload: Omit<ReviewItem, "id">];
}>();

const title = ref("");
const score = ref(5);
const comment = ref("");

const submit = () => {
  emit("submit", {
    title: title.value,
    score: score.value,
    comment: comment.value,
  });

  title.value = "";
  comment.value = "";
  score.value = 5;
};
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="title" placeholder="タイトル" />
    <input v-model.number="score" type="number" min="1" max="5" />
    <textarea v-model="comment" />
    <button type="submit">追加</button>
  </form>
</template>
