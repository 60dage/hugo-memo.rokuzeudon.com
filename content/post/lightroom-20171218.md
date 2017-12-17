+++
title = "Lightroom CC のユーザープリセットを初めて登録する時の注意点"
description = "プリセットデータを Finder から直接インストール（配置）する場合は、 Lightroom の再起動が必要だ。"
date = "2017-12-18T01:00:19+09:00"
categories = [ "memo" ]
tags = [ "Lightroom" ]
draft = false
+++

とあるサイトで購入した素材集の中に、拡張子が **.lrtemplate** のファイルが入っていた。
これは Adobe Lightroom のプリセットデータだ。

Lightroom CC で初めて利用しようとした時に若干つまづいたのでメモしておく。

### 利用方法

Lightroom アプリアイコンに、 lrtemplate ファイルをD&amp;Dすれば良い。

この時、`/Users/<username>/Library/Application Support/Adobe/Lightroom CC/Develop Presets/ユーザープリセット`フォルダに格納される。

### 直接フォルダにアップする場合は注意

画面のプリセット欄にある「プリセットフォルダーを開く」からフォルダを表示することもできる。

![](/img/lightroom-20171218.jpg "")

この時フォルダが「**User Presets**」になっており「ユーザープリセット」と重複してしまうが、実はどちらに入っていても問題ない。（どちらか一方にまとめておいた方が無難そう）

ただ、直接このフォルダにアップした場合、 **Lightroom を再起動しないとプリセットに表示されない**。
