+++
title = "WordPressで簡単に認証画面を設定できるプラグイン「パスワード保護」"
description = "とりあえず本番サーバーに実装したWordPressサイトに簡単に閲覧制限をかける方法について。"
date = "2018-01-21T01:00:19+09:00"
categories = [ "memo" ]
tags = [ "WordPress" ]
draft = false
+++

ベーシック認証でも良いが、KUSANAGI（nginx）で構築していると編集ファイルがいつもと違って地味に手間。なんでも良いが、プラグインで実現できれば楽だなと思って探していた。

そこで見つけた「パスワード保護」（Password Protected）というプラグインが便利だ。

![](/img/wordpress-plugin-authentication.jpg "")

設定すると、サイトへのアクセス時にこのようにパスワード入力画面を表示するようになる。

### 使い方

インストールして有効にし、設定画面に移動する。

![](/img/wordpress-plugin-authentication01.jpg "")

「パスワード保護状況」を有効、「新しいパスワード」欄に入力して変更を保存すると反映される。簡単。
