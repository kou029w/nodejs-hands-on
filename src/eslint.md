# ESLintの導入

公式サイト: [ESLint](https://eslint.org/)

ESLintは、JavaScriptの静的コード解析を行うためのツールです。

ESLintは、JavaScriptのコードの品質に関わる次のような項目を検査できます。

- デッドコードの検知 (no-unused-vars, no-unreachable, etc.)
- コードの複雑さ (max-lines, max-depth, complexity, etc.)

## 導入方法

プロジェクトにESLintを導入するには、ターミナルで以下のコマンドを実行します。

```bash
npm init @eslint/config
```

実行結果:

```console
$ npm init @eslint/config
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) <Enterキーを入力>
...
いくつか質問が続きます。それぞれ矢印キーとEnterキーを入力して回答してください。
なお回答後に作られる設定ファイルを直接編集することで設定を変更することもできます。
...
```

| 質問                                                                                                          | 回答例                                                             |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| How would you like to use ESLint? (ESLintをどのように使いたいですか?)                                         | To check syntax and find problems (シンタックス検査と問題点の検出) |
| What type of modules does your project use? (プロジェクトでは、どのような種類のモジュールを使用していますか?) | JavaScript modules (import/export) (ECMAScript modules)            |
| Which framework does your project use? (プロジェクトでは、どのフレームワークを使用していますか?)              | None of these (いずれもなし)                                       |
| Does your project use TypeScript? (あなたのプロジェクトではTypeScriptを使用していますか?)                     | No (いいえ)                                                        |
| Where does your code run? (コードはどこで実行しますか?)                                                       | Node (Node.js)                                                     |
| What format do you want your config file to be in? (設定ファイルの形式は?)                                    | JavaScript                                                         |
| Would you like to install them now? (今すぐインストールしますか?)                                             | Yes (はい)                                                         |
| Which package manager do you want to use? (どのパッケージマネージャを使用しますか?)                           | npm                                                                |

## 実行方法

導入したESLintは、`npx eslint` コマンドを使用することで実行できます。

```bash
npx eslint <ファイル名またはディレクトリ名>
```

たとえば、次のJavaScriptのファイルを作成し、ESLintによって検査してみましょう。

```js
// hello.js
const message = "Hello, World!";
console.log(message);
```

```console
$ npx eslint hello.js
```

実行後、何も表示されなければ検査完了です。
検査に合格したことを意味します。

実際にコードの品質に問題があった場合についても確認してみましょう。
上のコードを次のように変更してみます。

```js
// hello.js
const message = "Hello, World!";
console.log(invalid);
```

`console.log()` の引数に定義されていない無効な値 `invalid` を渡してみます。

```console
$ npx eslint hello.js

hello.js
  1:7   error  'message' is assigned a value but never used  no-unused-vars
  2:13  error  'invalid' is not defined                      no-undef

✖ 2 problems (2 errors, 0 warnings)

```

実行するとエラーメッセージが表示されます。
これは、ESLintがコードを検査した結果、2件の問題 (problems) を検知したことを意味します。

このようにして、ESLintはコードの品質に関する問題を検知することができます。

## エラーの説明

```
  1:7   error  'message' is assigned a value but never used  no-unused-vars
```

このメッセージは 対象のファイルの1行目、7列目に問題の可能性のあるコードが検出されたことを意味します。
`no-unused-vars` ルールが有効になっている場合、このメッセージが表示されます。
「'message' is assigned a value but never used (`message` に値が割り当てられているが、使われていません)」と書かれており、`message` がデッドコードとなっている可能性を知らせてくれています。

もし仮にここでコードに必要な変数を宣言しているならば、その変数は必要な場所で正しく使用されていない可能性があります。
あるいはもし仮に本当に不要な変数の宣言であるならば、この宣言は削除しても構いません。

```
  2:13  error  'invalid' is not defined                      no-undef
```

続いてのメッセージは、対象のファイルの2行目、13列目に問題の可能性のあるコードが検出されたことを意味します。
`no-undef` ルールが有効になっている場合、このメッセージが表示されます。
「'invalid' is not defined (`invalid` が定義されていない)」と書かれており、`invalid` が宣言されていない変数であることを知らせてくれています。
JavaScriptで変数を使用する場合、あらかじめ宣言する必要があるので必要に応じて宣言するか、あるいはもし誤った変数を参照しているならば、正しい変数に変更しましょう。

この他にもESLintにはさまざまなルールがあります。詳細は[ESLintのルール一覧](https://eslint.org/docs/rules/)をご覧ください。

## 複数のファイルの検査

引数にディレクトリを指定することで、そのディレクトリ内のコードを検査します。
もしカレントディレクトリ内のコードを検査したい場合は、`.` を引数に指定します。

```bash
npx eslint .
```
