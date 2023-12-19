# はじめてのテスト

テストランナーは、`node --test` コマンドを使用することで実行できます。

```bash
node --test
```

しかし、まだテストが1件も存在しません。

```console
$ node --test
ℹ tests 0
ℹ suites 0
ℹ pass 0
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 1.92388
```

実際にテストを作成し、実行していきましょう。

## ECMAScriptモジュール

ECMAScriptモジュール (ESM) とは、JavaScriptをモジュールとして再利用できるようにするための仕組みです。

Node.jsでESMを取り扱えるようにするためには `package.json` ファイルに `"type": "module"` プロパティを加えます。

```json
{
  "type": "module"
}
```

このように書き加えると、プロジェクトの `.js` ファイルはESMとして取り扱われます。

## テストファイルの作成

次のファイルを作成します。

```js
{{#include getting-started/hello.test.js}}
```

この作成した `hello.test.js` は、`node --test` コマンドを実行するときにテストとして実行されるようになります。

```console
$ node --test
✔ 1と2の合計は3です (0.546922ms)
ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 65.244086
```

問題なく実行できましたか？

```
✔ 1と2の合計は3です (0.546922ms)
```

画面に表示されたこの部分は「テスト "1と2の合計は3です" が実行され、そのテストは合格しました ✅」ということを意味しています。

このようにしてNode.jsで簡単にテストを行うことができます。

## はじめてのテストのコードの説明

テストのコードについてより詳しく説明します。

はじめてのテストのコード:

```js
{{#include getting-started/hello.test.js}}
```

このコードは、「1と2の合計は3です」というテストを意味します。
式 `1 + 2` が、 `3` と等しいことを検証するテストです。

このコードでは下記の機能が使われています。

`test()` 関数

テストを宣言するための関数です。

- 第一引数には、このテストの説明を人間が読める形式で記述します
- 第二引数には、テストの本体を記述します

`assert.strictEqual()` 関数

引数に与えた値を検証します。

`assert.strictEqual(<検査される値>, <期待する値>)`

「検査される値」と「期待する値」の同一性を検証します。

最初の行は `import` 文によって `node:assert` と `node:test` を指定しています。

```js
{{#include getting-started/hello.test.js:2:3}}
```

これらがNode.jsのテストランナーの実行に必要となります。

このコードは基本的な機能を確認するための極めて単純なテストですが、テスト環境自体の検証を行うことでもあります。
テスト環境の検証は、テストを行う上で最初に確認しておく重要なポイントです。
