+++
title = "Hugoでどうにかカテゴリー・タグを表示できた"
description = ""
date = "2017-12-15T01:00:19+09:00"
categories = [ "memo" ]
tags = [ "Hugo" ]
draft = false
+++

ようやく実装できた。今回も▲さんのテーマ[Pickles](https://github.com/mismith0227/hugo_theme_pickles)をめっちゃ参考にした。  
今は、記事ページの下部にだけリンクを載せている。

![](/img/hugo-challenge-20171215-01.jpg "")

クリックすると一覧ページへ移動する。

![](/img/hugo-challenge-20171215-02.jpg "")

一応、カテゴリー・タグをリスト表示するページもある。まだ１つずつしかないので寂しい。

- [Categories](/tags)
- [Tags](/categories)

カテゴリーは今後「photo」「diary」など増やしていきたい。[メインブログ](http://blog.rokuzeudon.com)は Web 制作に関わる記事に絞ろうと思っていて、そっちでは書かない（書きにくい）ことをこちらに投稿していきたい。

その前にこれらは実装したいところ。

- 記事ページのタイトルにサイト名を追加（分岐書く必要がある）
- OGP画像
- シェアボタン（読み込みが早いやつにしたい）

[公式テーマディレクトリ](https://themes.gohugo.io/)に載ってるやつを参考にしてうまいことやりたい。
