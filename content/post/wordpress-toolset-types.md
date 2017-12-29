+++
title = "Peraweb にて「 Toolset Types 」でカスタム投稿を追加してみた"
description = "ちょっとした制作に関わるメモを残せるよう、カスタム投稿「制作メモ」を実装した。"
date = "2017-10-11T01:00:19+09:00"
categories = [ "memo" ]
tags = [ "WordPress","Peraweb" ]
draft = false
+++

## やったこと

制作メモというカスタム投稿を追加した。
[Peraweb](https://web.howknow.link) と[ハウノ](http://www.howknow.link)をカスタマイズするときにやったことをメモする場所がほしかったのだ。

### プラグインのインストール

「Custom Post Type UI」も有名らしいが、管理画面の見た目（UI）がイマイチだったので、「Toolset Types」の方を使った。
モダンで見やすくてイイ感じ。

![](/img/wordpress-toolset-types1.jpg "")

### Post Type の追加

管理画面のメニュー… 「Toolset > Post Types」から新規追加。

![](/img/wordpress-toolset-types2.jpg "")

とりあえず「名前及び詳細」だけ入力して登録してみた。オプションはよくわからない。

### Taxonomy を登録

一応カテゴリー分けしたいので、Taxonomy （タクソノミー）を追加。今回は「メモ用カテゴリー」という名称にした。

![](/img/wordpress-toolset-types3.jpg "")

これで終わり。 WordPress は何かと難しそうなイメージを持っていたが、こうして簡単に操作できる無料のプラグインがあって驚いた。
