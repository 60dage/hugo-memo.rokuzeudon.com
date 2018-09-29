+++
title = "Mojaveクリーンインストールした後にやったことのメモ"
description = "やることが多くて地味に面倒臭いですががんばりましょう。"
date = "2018-09-30T01:00:19+09:00"
categories = [ "memo" ]
tags = [ "macOS" ]
draft = false
+++

### iCloud連携、関連アプリを起動・同期

- iTunes
- Photos
- Books
- Messages

これらのアプリは起動して利用開始しないと同期も開始してくれないので、先に立ち上げて必要な設定を済ませておきます。  
Photosは「Macストレージに最適化」を選択しておくとスピーディです。（それでも結構時間がかかります。）  
Messagesは「iCloudにメッセージを有効にする」にチェックを入れておきましょう。


### ブラウザ経由でアプリをダウンロード

- Chrome
- Firefox
- Adobe Creative Cloud
- Dropbox
- ChatWork
- Notion
- Atom
- Visual Studio Code
- Transmit
- Framer
- Clipy
- ImageOptim
- など

特にAdobeCC、Dropboxはインストール・同期に時間がかかるので先にやります。  
Chromeも設定の同期・読み込みに少し時間がかかるので、早めにログインしておきます。

### App Store経由でアプリをダウンロード

- Contrast
- Slack
- LINE
- Magnet
- Tweetbot
- TweetDeck
- Xcode
- など

特にXcodeは、開発環境の実行（Gitやbrew）で必要かつやたら容量が大きいので、これも先にやります。

### システム環境設定

諸々をよしなに（OSによってまちまちなので細かいところを都度調整）

### Photoshop

- あらかじめエクスポートしておいたプリセットとアクションのデータをインポート
- 必要なプラグインをインストール

### Finder

- 各種拡張子ファイルを開くアプリを指定する
- 全ての拡張子を表示
- その他諸々をよしなに

### ターミナル

- テーマ設定
- スクリーンショットの形式と保存先を変更
- ダウンロードフォルダのローカライズファイルを削除して英語表記に
- Homebrew導入
- Zsh、oh-my-zsh導入
- グローバルのGit設定
- 公開鍵/秘密鍵作成してGitHubにSSH接続
- Githubから必要なデータをClone
- その他諸々よしなに

### Slack

こちらの方法を参考に、もともと参加していたワークスペースを探し、必要な場所に参加します。  
[所属する Slack ワークスペースの URL を確認する – Slack](https://get.slack.help/hc/ja/articles/221769328-%E6%89%80%E5%B1%9E%E3%81%99%E3%82%8B-Slack-%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%81%AE-URL-%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B)
