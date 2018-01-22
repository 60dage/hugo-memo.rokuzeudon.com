+++
title = "WordPressで簡単に認証画面を設定できるプラグイン「パスワード保護」"
description = "とりあえず本番サーバーに実装したWordPressサイトに簡単に閲覧制限をかける方法について。"
date = "2018-01-21T01:00:19+09:00"
categories = [ "memo" ]
tags = [ "WordPress" ]
draft = false
+++

KUSANAGI（nginx）で構築すると、ベーシック認証をかけるときに対象ファイルを探して編集するのが手間だ。なんでも良いが、プラグインで実現できれば楽だなと思っていた。

そこで見つけた[パスワード保護（Password Protected）](https://ja.wordpress.org/plugins/password-protected/)というプラグインが便利だ。

設定すると、サイトへのアクセス時、このようなパスワード入力画面を表示するようになる。

![](/img/wordpress-plugin-authentication.jpg "")

### 使い方

インストールして有効にし、設定画面へ。

![](/img/wordpress-plugin-authentication01.jpg "")

「パスワード保護状況」を有効、「新しいパスワード」欄に入力して変更を保存すると反映される。
簡単だ。
