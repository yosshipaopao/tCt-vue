# tCt-vue
tCt(tclb Classroom todo)をVue.jsのSPAとして実装しようとしています
[技術科部](https://tclb.cf)でのプロジェクトです。
[こいつ](https://github.com/yosshipaopao/tCt)は廃止になりました
## 仕組み
[phpを使ってデータベースと連携したweb api](https://github.com/yosshipaopao/tCt-beta)と連携しています。
apiの認証は`firebase/auth`です。
## 使ってるパッケージ
- Vue
- Vite
- pinia
- firebase
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
