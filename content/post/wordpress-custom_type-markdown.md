+++
title = "カスタム投稿にも JP Markdown を適用する方法"
description = "WordPressのマークダウン投稿プラグインがカスタム投稿に反映されなくて焦った時の覚え書き。"
date = "2017-10-12T01:00:19+09:00"
categories = [ "memo" ]
tags = [ "WordPress","Peraweb" ]
draft = false
+++

[Peraweb](https://web.howknow.link/)にて、 Toolset を使ってカスタム投稿してみたものの、愛用している「 JP Markdown 」が効いてなくて焦った。
結論だが、１行コードをfunction.phpに書き足すだけで動く。

## 追加コード

`add_post_type_support( '定義したカスタム投稿タイプ名', 'wpcom-markdown' );`

**これだけ！**

### 参考にしたサイト

[WordPressにJetpack MarkDownをインストールする | 株式会社ランチェスター](http://www.lanches.co.jp/blog/2569)
