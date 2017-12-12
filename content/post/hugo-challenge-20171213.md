---
title: "HugoとNetlifyの連携でつまづいてしんどかった"
date: 2017-12-13T01:00:19+09:00
description: ページの前後へ移動する機能を実装しようとしたら、ローカルでは問題ないのに Netlify でエラーになってしまい困った。
categories: "日記"
tags: "Hugo"
---

CSSやHTMLの記述を整理したり、全体的に幅や文字サイズを大きくしたりと少しづつ手を加えている。

![](/img/hugo-challenge-20171213.jpg "")

今回は、前後記事への移動の仕組みを追加するところでつまづいてしまった。最終的に single.html のみに記述すると無事公開できた。

最初は共通パーツとして分けていたのだが、`template.go:132: template: partials/nav.html:4:12: executing "partials/nav.html" at <.Prev>: can't evaluate field Prev in type *hugolib.Node in partials/nav.html`...と怒られてしまった。

`*hugolib.Node` と書いてあるからNodeのバージョンがいけないのかな？と思って次の２つを試したが効果がなかった。

- netlify.toml にて Hugo と Node のバージョンを指定
- nvm をインストールして、 Netlify とローカルの Node のバージョンを揃える

`partials/nav.html` へと関係する記述をまとめていたので、試しに index.html と single.html などから `{{ partial "nav" . }}` を消すも、変わらずエラーだった。

そこで、こうして分離するのをやめて、直接 single.html のみに記述するとエラーがなくなった。なんでなの。
