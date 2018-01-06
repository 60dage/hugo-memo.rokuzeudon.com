+++
title = "KUSANAGI で SSL ( Let's Encrypt ) が切れていたので更新した"
description = "KUSANAGI を使っている場合、SSLは自動で更新されると思っていたがされないケースがあるようだ。"
date = "2018-01-06T01:00:19+09:00"
categories = [ "memo" ]
tags = [ "KUSANAGI", "WordPress" ]
draft = false
+++

KUSANAGIで構築したサイトのSSLが切れていて焦った。ひとまず、次のコマンドでSSL証明書の再発行をした。

`kusanagi ssl --email hoge@hoge.com`

これでひとまず更新された様子。

www.peraweb.link というドメインで運用していたサイトを、 web.howknow.link へと移管していた。この時、もううろ覚えだが、プロファイルは変えずに、ドメインの設定だけ変更したような記憶がある。その辺りでいじったどこかのファイルが影響しているような気がするが、何をしたか覚えていないし、ログも残っていない。

バージョン管理とか、ちゃんとメモ書きを残しておくのは大事だなと改めて思った。

きっと来年も自動更新できないと思うので、忘れないようにリマインダーをかけておくことにする。
