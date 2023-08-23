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
  home: {
    title: 'ホーム',
  },
  setting: {
    title: '設定',
    profile: {
      title: 'ユーザープロフィール',
      baseProfile: {
        title: '基本情報',
        fullName: '名前',
        selfIntroduction: '自己紹介',
        location: '場所',
        baseLanguage: '基本言語',
      },
      publicSetting: {
        title: '公開設定',
        public: '公開',
        description: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
      },
      socialLink: {
        title: "リンク",
        description: "外部リンクを共有します。リンクがプロフィールに表示されるようになります。",
        addLink: "リンクを追加"
      }
    },
  },
  login: {
    title: 'アプリへログイン',
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
}

export default ja
