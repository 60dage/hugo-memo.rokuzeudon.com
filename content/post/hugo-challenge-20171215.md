+++
title = "Hugoでどうにかカテゴリー・タグを表示できた"
description = "記事ページの下部に出力した。なかなかうまくいかなくて丸１日くらい悩んだ…。"
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

実装内容は[Githubのログ](https://github.com/rokuzeudon/6z-Hugo/commit/04267d2da1ef3c7fea0636827beda30b8d665a49)を見てほしい。
何につまづいたかというと `{{ $baseurl := .Site.BaseURL}}` の有無だ。これが該当ファイルで抜けてるとNGな理由は、まだよくわかってない…。

現在カテゴリーは「memo」しかないが、今後「photo」「diary」など増やしたい。[メインブログ](http://blog.rokuzeudon.com)は Web 制作に関わる記事に絞ろうと思っていて、そっちでは書かない（書きにくい）ことをこちらに投稿するつもり。

その前にこれらは実装したいところ。

- 記事ページのタイトルにサイト名を追加（分岐書く必要がある）
- OGP画像
- シェアボタン（読み込みが早いやつにしたい）

[公式テーマディレクトリ](https://themes.gohugo.io/)に載ってるやつを参考にしてうまいことやりたい。
