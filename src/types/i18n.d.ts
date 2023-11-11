export type I18n = {
  language: {
    title: string
    japanese: string
    english: string
  }
  error: {
    notEntered: string
  }
  alert: {
    create: {
      success: string
      failure: string
    }
    update: {
      success: string
      failure: string
    }
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
  page: {
    home: string
    login: string
    setting: {
      account: string
      profile: string
      notification: string
    }
  }
  login: {
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
  home: {}
  account: {}
  profile: {
    baseProfile: {
      title: string
      fullName: { label: string }
      description: { label: string }
      location: { label: string }
      baseLanguage: { label: string }
    }
    publicSetting: {
      title: string
      public: { label: string }
      description: string
    }
    socialLink: {
      title: string
      description: string
      addLink: string
    }
  }
  notification: {}
}
