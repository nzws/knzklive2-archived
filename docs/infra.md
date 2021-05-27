# インフラ構成（メモ）

- Vercel
  - フロントエンド, サーバレス API のデプロイ
- ストリーミングサーバー
  - 複数台構築を想定
  - Ansible を使用して自動構築
- ジョブサーバー
  - 重い処理をやる
  - Ansible を使用して自動構築
- Firebase
  - Cloud Firestore
    - メインのデータ保管場所
  - Realtime Database
    - プレゼンス（視聴数カウント）に使用
  - Cloud Storage for Firebase
    - 配信終了後のコメントデータの保管、配信サムネイル保管
- Google Cloud
  - Cloud Pub/Sub
    - ストリーミングサーバー/ジョブサーバー/API 間の通信受け渡し
