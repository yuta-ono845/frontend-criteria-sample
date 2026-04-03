<script setup lang="ts">
import RatingBadge from "./RatingBadge.vue";
import type { ReviewItem } from "../types/review";

defineProps<{
  reviews: ReviewItem[];
}>();
</script>

<template>
  <section>
    <article v-for="review in reviews" :key="review.id">
      <h2>{{ review.title }}</h2>
      <RatingBadge :score="review.score" />
      <p>{{ review.comment }}</p>
    </article>
  </section>
</template>
