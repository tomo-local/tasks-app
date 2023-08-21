import { I18n } from '@/types/i18n'

const en: I18n = {
  language: {
    title: 'Language',
    japanese: 'Japanese',
    english: 'English',
  },
  home: 'home',
  header: {
    notificationIcon: {
      title: "Notification"
    },
    languageIcon: {
      title: "Language"
    },
    userIcon: {
      profile: "User profile",
      setting: "Setting",
      logout:"Logout"
    }
  },
  drawer: {
    home: { title: "Home" },
    dashboard: { title: "Dashboard" },
    projects: { title: "Projects" },
    tasks: { title: "Tasks" },
    setting: { title: "Setting" },
  },
  error: {
    notEntered: 'Please enter a ',
  },
  login: {
    title: 'Login App',
    form: {
      title: 'Login',
      description: 'Enter your details to login.',
      email: {
        label: 'E-mail',
      },
      password: {
        label: 'Password',
      },
      failed: 'Incorrect email address or password',
      forgetPasswordLink: 'Forgotten password ?',
      submit: 'Login',
      changeSignUpButton: 'Create account',
    },
  },
}

export default en
