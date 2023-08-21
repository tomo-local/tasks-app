export type I18n = {
  language: {
    title: string
    japanese: string
    english: string
  }
  header: {
    notificationIcon: {
      title: string
    }
    languageIcon: {
      title: string
    }
    userIcon: {
      profile: string
      setting: string
      logout: string
    }
  }
  drawer: {
    home: { title: string }
    dashboard: { title: string }
    projects: { title: string }
    tasks: { title: string }
    setting: { title: string }
  }
  home: string
  error: {
    notEntered: string
  }
  login: {
    title: string
    form: {
      title: string
      description: string
      email: {
        label: string
      }
      password: {
        label: string
      }
      failed: string
      forgetPasswordLink: string
      submit: string
      changeSignUpButton: string
    }
  }
}
