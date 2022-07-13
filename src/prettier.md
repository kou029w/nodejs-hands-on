# Prettierの導入

公式サイト: [Prettier](https://prettier.io/)

Prettierは、ソースコードを整形するためのツールです。

Prettierは、JavaScriptをはじめとした、さまざまなコードの整形に対応しています。

- JavaScript
- JSX
- Angular
- Vue
- Flow
- TypeScript
- CSS, Less, and SCSS
- HTML
- Ember/Handlebars
- JSON
- GraphQL
- Markdown, including GFM and MDX
- YAML

次のコマンドでPrettierをインストールします。

```
npm i -D prettier
```

インストール後、次のコマンドでファイルの整形を行います。

```bash
npx prettier --write <ファイル名またはディレクトリ名>
```

実行例:

```bash
npx prettier --write hello.js
```

もしカレントディレクトリ以下にある複数のファイルを整形したい場合は、`.` を引数に指定します。

```bash
npx prettier --write .
```

このようにして、Prettierはコードの整形を行うことができます。

## ESLintとの競合を避ける

ESLintでコードの整形を行うことがあり、その設定によってはPrettierで整形を行うことができない場合があります。
それを避けるには、ESLintの設定として[`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier#readme)をインストールし、これを使用します。

```bash
npm i -D eslint-config-prettier
```

```js
// .eslintrc.js
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier", // extends の要素として追加
  ],
};
```

こうすることによって、Prettierで整形を行うことができない問題を回避することができます。必要に応じて行いましょう。
