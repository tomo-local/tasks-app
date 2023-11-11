import { I18n } from '@/types/i18n'

const ja: I18n = {
  language: {
    title: '言語',
    japanese: '日本語',
    english: '英語',
  },
  error: {
    notEntered: 'を入力してください',
  },
  alert: {
    create: {
      success: '作成に成功しました',
      failure: '作成に失敗しました',
    },
    update: {
      success: '更新に成功しました',
      failure: '更新に失敗しました',
    },
  },
  header: {
    notificationIcon: {
      title: '通知',
    },
    languageIcon: {
      title: '言語設定',
    },
    userIcon: {
      profile: 'ユーザー情報',
      setting: '設定',
      logout: 'ログアウト',
    },
  },
  drawer: {
    home: { title: 'ホーム' },
    dashboard: { title: 'ダッシュボード' },
    projects: { title: 'プロジェクト' },
    tasks: { title: 'タスク' },
    setting: { title: '設定' },
  },
  page: {
    home: 'ホーム',
    login: 'アプリへログイン',
    setting: {
      account: 'アカウント情報',
      profile: 'プロフィール',
      notification: '通知設定',
    },
  },
  login: {
    form: {
      title: 'ログイン',
      description: 'ログインするには詳細を入力してください。',
      email: {
        label: 'メールアドレス',
      },
      password: {
        label: 'パスワード',
      },
      failed: 'メールアドレスまたはパスワードに誤りがあります',
      forgetPasswordLink: 'パスワードを忘れた場合',
      submit: 'ログイン',
      changeSignUpButton: 'アカウントを作成',
    },
  },
  home: {},
  account:{},
  profile: {
    baseProfile: {
      title: '基本情報',
      fullName: { label: '名前' },
      description: { label: '説明' },
      location: { label: '場所' },
      baseLanguage: { label: '基本言語' },
    },
    publicSetting: {
      title: '公開設定',
      public: { label: '公開' },
      description: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
    },
    socialLink: {
      title: 'リンク',
      description:
        '外部リンクを共有します。リンクがプロフィールに表示されるようになります。',
      addLink: 'リンクを追加',
    },
  },
  notification: {}
}

export default ja
