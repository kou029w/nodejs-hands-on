# Node.jsのインストール

Node.jsはさまざまな方法でインストールできます。Windowsをお使いの方は「[Node.js を Linux 用 Windows サブシステム (WSL2) にインストールする](https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/nodejs-on-wsl)」を推奨します。

- [Node.js を Linux 用 Windows サブシステム (WSL2) にインストールする](https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/nodejs-on-wsl) (推奨)
- 公式サイトからダウンロード

## 別の方法: 公式サイトからダウンロード

主要なプラットフォームのインストーラーは、[Node.jsの公式サイト - https://nodejs.org/en/download](https://nodejs.org/en/download) からダウンロードできます。
こちらから自分の環境に合わせたインストーラーをダウンロードし、それを実行します。
インストーラーを実行するとNode.jsがインストールされます。

## ヒント: 「LTS」と「最新版」

バージョンの説明を読むと「LTS (推奨版)」とあります。この「LTS」は何かというと、「Long Term Support」を表しており、「長期間安定的にサポートされます」ということを意味します。

現在、Node.jsは毎年LTSリリースを行っています。このLTSリリースは、バージョン番号が偶数番号 (たとえば、22、24など) のものが採用されます。LTSリリースのバージョンは、重要なバグ修正を基本的に30ヶ月間行われることを保証されています。

一方、それらのLTSリリースとは別に、Node.jsは6ヶ月ごとに最新版がリリースされます。この最新版はLTSリリースとは異なり、次のバージョンのリリース後にサポートされなくなります。特別な理由が無ければLTSリリースのバージョンをインストールするのがよいでしょう。

参照: [Node.js Releases](https://nodejs.org/en/about/previous-releases)

## ターミナルの使用

コマンドを実行するにはターミナルを使用します。

Windows の場合:

Microsoft Storeから、Windows Terminalをインストールします。
インストール後、[スタートメニュー] > [Windows Terminal] を選択して起動します。

macOS の場合:

[アプリケーション] > [ユーティリティ] 内にある [ターミナル] を選択して起動します。

## Node.jsの使用

ターミナルで次のコマンドを実行して、Node.jsがインストールされていることを確認します。

```bash
node -v
```

インストールしたNode.jsのバージョンが表示されていれば、Node.jsを使用する準備は完了です。

```console
$ node -v
v22.11.0
```
