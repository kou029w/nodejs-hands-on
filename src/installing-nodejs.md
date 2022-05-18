# Node.jsのインストール

Node.jsはさまざまな方法でインストールできます。最も一般的な方法は、公式サイトからダウンロードしてインストールする方法です。

主要なプラットフォームのインストーラーは、[Node.jsの公式サイト - https://nodejs.org/ja/download/](https://nodejs.org/ja/download/) からダウンロードできます。
こちらから自分の環境に合わせたインストーラーをダウンロードし、それを実行します。
インストーラーを実行するとNode.jsがインストールされます。

## ヒント: 「LTS」と「最新版」

バージョンの説明を読むと「LTS (推奨版)」とあります。この「LTS」は何かというと、「Long Term Support」を表しており、「長期間安定的にサポートされます」ということを意味します。

現在、Node.jsは毎年LTSリリースを行っています。このLTSリリースは、バージョン番号が偶数番号 (たとえば、16、18など) のものが採用されます。LTSリリースのバージョンは、重要なバグ修正を基本的に30ヶ月間が行われることを保証されています。

一方、それらのLTSリリースとは別に、Node.jsは6ヶ月ごとに最新版がリリースされます。この最新版はLTSリリースとは異なり、次のバージョンのリリース後にサポートされなくなります。したがって、一般的にはLTSリリースを採用するのがよいでしょう。

参照: [リリース | Node.js](https://nodejs.org/ja/about/releases/)

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
v16.15.0
```

## NPMとプロキシの確認

プロキシが存在する環境では、ターミナルで `npm` コマンドを実行した際、次のようなエラーメッセージとともに失敗することがあります。

```console
$ npm install --save-dev jest
npm ERR! code ENOTFOUND
npm ERR! syscall getaddrinfo
npm ERR! errno ENOTFOUND
npm ERR! network request to https://registry.npmjs.org/jest failed, reason: getaddrinfo ENOTFOUND proxy.example.com
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/webdino/.npm/_logs/2022-01-12T07_20_33_146Z-debug-0.log
```

このようなエラーが出ない場合は設定不要です。もしこのようなエラーが出る場合は、必要に応じて環境変数 `HTTP_PROXY` と `HTTPS_PROXY` に適切なプロキシのURLを設定します。

## NPMのプロキシの設定

実際の自分の環境に合わせて変更してください。下記ではプロキシーのURLの例として `http://user:pass@proxy.example.com:8080` を使用しますが、実際には適切なURLを設定してください。

### Windows - コマンドプロンプトの場合

```
set HTTP_PROXY=http://user:pass@proxy.example.com:8080
set HTTPS_PROXY=http://user:pass@proxy.example.com:8080
```

### Windows - PowerShellの場合

```powershell
$env:HTTP_PROXY="http://user:pass@proxy.example.com:8080"
$env:HTTPS_PROXY="http://user:pass@proxy.example.com:8080"
```

### それ以外 - BashやZshなどの場合

```bash
export HTTP_PROXY=http://user:pass@proxy.example.com:8080
export HTTPS_PROXY=http://user:pass@proxy.example.com:8080
```

設定を行ったら、通常通り `npm` コマンドを実行して、エラーが出ないことを確認してみましょう。
