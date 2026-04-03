<script setup lang="ts">
import { computed, ref } from "vue";
import ReviewForm from "./components/ReviewForm.vue";
import ReviewList from "./components/ReviewList.vue";
import type { ReviewItem } from "./types/review";

const reviews = ref<ReviewItem[]>([
  {
    id: 1,
    title: "Vueの基本",
    score: 5,
    comment: "props と emits の流れがわかりやすいです。",
  },
]);

const averageScore = computed(() => {
  if (reviews.value.length === 0) {
    return 0;
  }

  const total = reviews.value.reduce((sum, review) => sum + review.score, 0);
  return total / reviews.value.length;
});

const appendReview = (payload: Omit<ReviewItem, "id">) => {
  reviews.value.push({
    id: Date.now(),
    ...payload,
  });
};
</script>

<template>
  <main>
    <h1>Vueレビュー一覧</h1>
    <p>平均評価: {{ averageScore }}</p>
    <ReviewForm @submit="appendReview" />
    <ReviewList :reviews="reviews" />
  </main>
</template>
