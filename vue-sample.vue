<script setup lang="ts">
import { computed, defineComponent, ref } from "vue";

// TypeScript で扱うデータの型を定義している。
interface Book {
  id: number;
  title: string;
  author: string;
}

// 子コンポーネント。
// 親から props を受け取り、イベントを emit で親へ返す Vue の基本形。
const BookCard = defineComponent({
  name: "BookCard",
  props: {
    title: { type: String, required: true },
    author: { type: String, required: true },
  },
  emits: ["select"],
  setup(props, { emit }) {
    // props から表示用の値を組み立てている。
    const label = computed(() => `${props.title} / ${props.author}`);
    // 子で起きた操作を親に伝える。
    const select = () => emit("select", props.title);
    return { label, select };
  },
  template: `<button @click="select">{{ label }}</button>`,
});

// ref は Vue の状態管理。値が変わると画面も更新される。
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

    <!--
      v-for で一覧表示。
      :title と :author で親から子へ props を渡している。
      @select で子からのイベントを受け取り、親の state を更新している。
    -->
    <BookCard
      v-for="book in books"
      :key="book.id"
      :title="book.title"
      :author="book.author"
      @select="selectedTitle = $event"
    />
  </main>
</template>
