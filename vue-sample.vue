<script setup lang="ts">
import { computed, defineComponent, ref } from "vue";

interface Book {
  id: number;
  title: string;
  author: string;
}

const BookCard = defineComponent({
  name: "BookCard",
  props: {
    title: { type: String, required: true },
    author: { type: String, required: true },
  },
  emits: ["select"],
  setup(props, { emit }) {
    const label = computed(() => `${props.title} / ${props.author}`);
    const select = () => emit("select", props.title);
    return { label, select };
  },
  template: `<button @click="select">{{ label }}</button>`,
});

const books = ref<Book[]>([
  { id: 1, title: "Vue入門", author: "田中" },
  { id: 2, title: "Composition API", author: "佐藤" },
]);

const selectedTitle = ref("");
</script>

<template>
  <main>
    <h1>Vue Sample</h1>
    <p>選択中: {{ selectedTitle }}</p>

    <BookCard
      v-for="book in books"
      :key="book.id"
      :title="book.title"
      :author="book.author"
      @select="selectedTitle = $event"
    />
  </main>
</template>
