# frontend-criteria-sample

評価シートの説明用に作成した、最小構成のフロントエンド学習サンプルです。

このリポジトリは動作確認を前提にしておらず、以下の観点をコードで説明できるように構成しています。

- React の基本構文
- Vue の基本構文
- Next.js App Router の基本構文
- API 連携の流れ
- SPA の考え方
- Atomic Design に沿ったコンポーネント設計
- TypeScript の型定義

## 構成

- `react-spa-ts`
  - React + TypeScript の SPA サンプル
  - `props`、`state`、`useEffect`、`fetch`、`react-router-dom` を使用
  - `atoms / molecules / organisms / templates / pages` の構成を採用
- `next-app-router-ts`
  - Next.js App Router を想定した TypeScript サンプル
  - `app` ディレクトリ、動的ルート、Server Component、Client Component、Route Handler を使用
- `vue-ts`
  - Vue 3 + TypeScript のサンプル
  - `<script setup lang="ts">`、`defineProps`、`defineEmits`、`ref`、`computed` を使用

## 評価項目との対応

- React の基本構文
  - `react-spa-ts/src/App.tsx`
  - `react-spa-ts/src/pages/BookListPage.tsx`
  - `react-spa-ts/src/components/**`
- Next.js の基本構文
  - `next-app-router-ts/app/page.tsx`
  - `next-app-router-ts/app/books/[id]/page.tsx`
  - `next-app-router-ts/app/api/books/route.ts`
- API 連携
  - `react-spa-ts/src/api/bookApi.ts`
  - `react-spa-ts/src/hooks/useBooks.ts`
  - `next-app-router-ts/app/api/books/route.ts`
- SPA
  - `react-spa-ts/src/App.tsx`
  - `react-spa-ts/src/pages/BookDetailPage.tsx`
- コンポーネント設計
  - `react-spa-ts/src/components/atoms`
  - `react-spa-ts/src/components/molecules`
  - `react-spa-ts/src/components/organisms`
  - `react-spa-ts/src/components/templates`
- TypeScript
  - `react-spa-ts/src/types/book.ts`
  - `next-app-router-ts/types/book.ts`
  - `vue-ts/src/types/review.ts`

## 面談で言いやすい要点

- React サンプルは、一覧画面と詳細画面をルーターで切り替える SPA 構成です。
- Next サンプルは、ファイルベースルーティングと Server Component / Client Component の分担を示しています。
- Vue サンプルは、親子コンポーネント間で `props` と `emits` を使ってデータを受け渡しています。
- TypeScript は `interface`、`type`、`enum`、ジェネリクスを使って型安全にしています。
