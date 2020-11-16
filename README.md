# Loco

同じチャンネルを登録している人と開いているタブを共有できる Chrome の拡張機能です。

通知のデザインは日替わりのランダムです。

# インストール

```
    git clone https://github.com/KajiwaraKensei/Chrome.git
    cd Chrome
    npm install
    cd functions
    npm install
    cd ../
```

    ※ ビルドしない場合は「npm install」 は不要

# Chrome に追加

1. ビルド
   ```
   npm run build
   ```
   ※ ビルドではなく「chrome.zip」を解凍でも可能
2. [chrome://extensions/](chrome://extensions/)に移動。
3. 右上のデベロッパーモードをオンにする。
4. 左上の方にあるパッケージされていない拡張期のを読み込むを選択。
5. クローンした Chrome を選択。
   ※ zip を解凍した場合は解凍した「chrome」を選択

# 使い方

1. タブにある拡張機能のアイコンをクリック
2. 歯車をクリック。設定画面が開きます。
3. 設定画面でチャンネルを追加します。
4. もう一度タブの拡張機能をクリックしたら先ほど追加したチャンネルが増えているので、共有したいページで送りたいチャンネルをクリックします。

以上
