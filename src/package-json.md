# package.jsonファイル

Node.jsを使ったプロジェクトは、基本的に `package.json` というファイルが配置されます。
`package.json` には、次のようなプロジェクトに必要な付帯情報が含まれます。

- 名前とバージョン
- 外部モジュールや依存関係
- テストやビルドするためのコマンドなど

## プロジェクトの作成

Node.jsを使った開発をはじめるにあたって、最初にプロジェクトのためのディレクトリを作成します。

```bash
mkdir my-project
cd my-project
```

そして、その中に `package.json` を配置します。

```bash
npm init -y
```

これで一通りの準備が整いました。
