# 基本的な機能

Node.jsのテストランナーの機能について説明します。

## テストファイルの検出

デフォルトで下記のパターンに一致するすべてのファイルをテストファイルとして検出します[^running-tests-from-the-command-line]。

- `**/*.test.?(c|m)js`
- `**/*-test.?(c|m)js`
- `**/*_test.?(c|m)js`
- `**/test-*.?(c|m)js`
- `**/test.?(c|m)js`
- `**/test/**/*.?(c|m)js`

[^running-tests-from-the-command-line]: <https://nodejs.org/api/test.html#running-tests-from-the-command-line>

## テストの自動監視

`--watch` オプションを指定することで、テストファイルの変更を自動で監視します。

```
node --test --watch
```

終了するにはキーボードの <ruby>`Ctrl` + `C`<rt>`Ctrl`キーを押しながら`C`</rt></ruby> を押します。

> **Note**\
> `--watch` オプションは Node.js v18 では利用できません。

## プロジェクトでのテストコマンドの設定

この設定を行うと、`npm test` コマンドでテストを実行できるようになります。

`package.json` の `scripts` プロパティの中を下記のように変更します。

```json
{
  "scripts": {
    "test": "node --test"
  }
}
```

NPMコマンドでのテストの実行:

```bash
npm test
```

`node --test` コマンドの実行と同様のテスト結果が得られます。
