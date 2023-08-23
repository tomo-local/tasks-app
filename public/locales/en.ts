import { I18n } from '@/types/i18n'

const en: I18n = {
  language: {
    title: 'Language',
    japanese: 'Japanese',
    english: 'English',
  },
  error: {
    notEntered: 'Please enter a ',
  },
  header: {
    notificationIcon: {
      title: 'Notification',
    },
    languageIcon: {
      title: 'Language',
    },
    userIcon: {
      profile: 'User profile',
      setting: 'Setting',
      logout: 'Logout',
    },
  },
  drawer: {
    home: { title: 'Home' },
    dashboard: { title: 'Dashboard' },
    projects: { title: 'Projects' },
    tasks: { title: 'Tasks' },
    setting: { title: 'Setting' },
  },
  home: {
    title: 'Home',
  },
  setting: {
    title: 'Setting',
    profile: {
      title: 'Your Profile',
      baseProfile: {
        title: 'Base Profile',
        fullName: 'Full Name',
        selfIntroduction: 'Self Introduction',
        location: 'Location',
        baseLanguage: 'Base Language',
      },
      publicSetting: {
        title: 'Publish Setting',
        public: 'Public',
        description: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
      },
      socialLink: {
        title: 'Social Links',
        description:
          'Share an external link. The link will now appear on your profile.',
        addLink: 'add link',
      },
    },
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
