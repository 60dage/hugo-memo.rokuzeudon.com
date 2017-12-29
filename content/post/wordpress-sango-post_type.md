+++
title = "テーマSANGOの子テーマで、カスタム投稿の実装にチャレンジ中"
description = "WordPressテーマ「Sango」カスタマイズの覚え書き。"
date = "2017-10-13T01:00:19+09:00"
categories = [ "memo" ]
tags = [ "WordPress","Sango","Peraweb" ]
draft = false
+++

## できたこと

### カスタム投稿トップのタイトルから「アーカイブ：」を消す

functions.php に次のコードを追加した。

```
add_filter( 'get_the_archive_title', function ($title_memo) {
  if ( is_post_type_archive() ) {
      $title_memo = post_type_archive_title( '', false );
    }
  return $title_memo;
});
```

### カスタム投稿ページ用のウィジェット表示

まず、プラグイン「 **Custom Post Type Widgets** 」もインストールして、管理画面にカスタム投稿のタクソノミー用ウィジェットが表示されるようにしておく。

次に、functions.php に次のコードを追加した。

```
function sng_child_after_setup() {
  add_action( 'widgets_init', 'sng_child_register_sidebars' );
} /* end sng_child_after_setup */
add_action( 'after_setup_theme', 'sng_child_after_setup' );

function sng_child_register_sidebars() {
  register_sidebar(array(
    'id' => 'sidebar_memo', //てきとうな英数字
    'name' => 'サイドバー（制作メモ）', //ウィジェットに表示したい名前
    'description' => 'カスタム投稿「制作メモ」用のサイドバーです。スマホで見たときにはページ下に配置されます。', //てきとうな説明文
    'before_widget' => '<div id="%1$s" class="widget %2$s">',
    'after_widget' => '</div>',
    'before_title' => '<h4 class="widgettitle dfont">',
    'after_title' => '</h4>',
  ));
}
```

そして、ウィジェットの管理画面に追加された「サイドバー（制作メモ）」に、プラグインで表示したウィジェット「カテゴリー（カスタム投稿タイプ）」を登録。

最後に、必要なテンプレートを作ったり編集したりして表示するサイドバーの指定を変更すると表示できた。

1. 親テーマの「single.php」を複製して「single-memo.php」を作成、記述「get_sidebar()」→「get_sidebar(‘memo’)」に変更
1. 親テーマの「archive.php」を複製して「archive-memo.php」を作成、記述「get_sidebar()」→「get_sidebar(‘memo’)」に変更
1. 親テーマの「sidebar.php」を複製して「sidebar-memo.php」を作成、２カ所の記述「sidebar1」→「sidebar_memo」に変更

## できなかったこと

### パンくずの指定

どう記述したら正しく表示されるかわからなかったから、記事ページではパンくず自体の表示を消した…（他のページはそのまま）

### 「カテゴリー」の場所に「タクソノミー」を出力

簡単そうだけど、まだ知識が足りない…。

### URLの変更

`/memo/wordpress/` みたいにしたいんだけど、現状
`/category_memo/wordpress/` になってしまっている。

## 最後に

[SANGO](https://saruwakakun.design/) はコメントが丁寧に書いてあってありがたい。
基礎知識がないがために壁にあたってる感じがするので、もっとWordPressの勉強しよう。
