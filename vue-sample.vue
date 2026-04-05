<script setup lang="ts">
import { defineComponent, ref } from "vue";

// Atomic Design の Atom にあたる最小部品。
// ラベル表示とクリック通知だけを担当する再利用用ボタン。
const BaseButton = defineComponent({
  name: "BaseButton",
  props: {
    label: { type: String, required: true },
  },
  emits: ["click"],
  template: `
    <button @click="$emit('click')">{{ label }}</button>
  `,
});

// HelloCard は Molecule にあたる子コンポーネント。
// 親から message を受け取り、BaseButton を組み合わせて change イベントを親へ返す。
const HelloCard = defineComponent({
  name: "HelloCard",
  props: {
    message: { type: String, required: true },
  },
  emits: ["change"],
  components: {
    BaseButton,
  },
  setup(props, { emit }) {
    const changeMessage = () => emit("change", `${props.message} from Vue child`);
    return { changeMessage };
  },
  template: `
    <section>
      <h1>{{ message }}</h1>
      <BaseButton label="メッセージ変更" @click="changeMessage" />
    </section>
  `,
});

// 親コンポーネントが持つ状態。
// ref で message を管理し、子からイベントを受け取ったら値を書き換える。
// このファイル全体では Page に近い役割を持っている。
const message = ref("Hello Vue");
</script>

<template>
  <main>
    <HelloCard :message="message" @change="message = $event" />
  </main>
</template>
