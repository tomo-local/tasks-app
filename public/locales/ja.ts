import { I18n } from '@/types/i18n'

const ja: I18n = {
  language: {
    title: '言語',
    japanese: '日本語',
    english: '英語',
  },
  home: 'ホーム',
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
  error: {
    notEntered: 'を入力してください',
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
