+++
title = "プラグイン「JP Markdown」の更新が止まってるのでJetpackに乗り換えた"
description = "WordPress の記事を Markdown 記法で投稿するときに便利なプラグインについて。"
date = "2017-10-12T02:00:19+10:00"
categories = [ "memo" ]
tags = [ "WordPress","Peraweb" ]
draft = false
+++

見出しや強調が簡単に指定できる便利な文法、Markdown。
便利なのが好きで、 [Peraweb](https://web.howknow.link) も[ハウノ](http://www.howknow.link)も、Markdownで記事投稿ができるように設定している。

## WordPress用のプラグイン

WordPressでMarkdownに対応するにはプラグインを導入するのが簡単なんだけど、色々種類がある。

### JP Markdown

Markdownが使えるようになる、ただそれだけのプラグイン。機能が絞られてるだけあって軽量で、私も愛用していた。

しかし、プラグインの公式ページを改めて見ると、

> This plugin will is no longer maintained.

**このプラグインはずっとメンテナンスされていません**…！！確かに、最終更新日は１年以上前になっていた。
不安なので、別のプラグインを頼ることに。

### Jetpack

いろいろ便利な機能がセットになった豪華な無料プラグイン。開発元は、wordpress.comも運営してるAutomattic Inc.さん。
ちなみに「JP Markdown」は、このJetpackの中にある機能を独立させたプラグインだったらしい。JP MarkdownでできることはJetpackでもできるということ。

![](/img/wordpress-jetpack.jpg "")

管理画面の「Jetpack」をクリックしダッシュボードを開くと、「プレーンテキストの Markdown 構文で投稿やページに書き込み」という欄があるからチェックを入れるだけ。

注意点としては、色々機能が盛りだくさんなだけに、プラグインをオンにすると体感できるレベルでページの表示速度が落ちる。
なので使わない機能はオフにすると良い。
