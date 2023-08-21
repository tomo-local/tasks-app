
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

import  MenuItem from '@material-tailwind/react/components/Menu/MenuItem'
import LanguageIcon from '@heroicons/react/24/outline/LanguageIcon'

import IconMeneBase from '@/components/common/layouts/header/IconMeneBase'
import useLocale from '@/hooks/useLocale'

const commonStyle =
  'py-2 rounded-none text-main hover:bg-sub hover:text-white focus:bg-sub focus:text-white font-bold'

export default function LocaleSelect() {
  const { t, locale } = useLocale()
  const router = useRouter()

  return (
    <div className="flex items-center justify-center w-12">
      <IconMeneBase
        icon={<LanguageIcon className="w-5 h-5" />}
        className="min-w-[80px]"
      >
        <Link
          href={router.asPath}
          locale="en"
          passHref
          className="outline-none"
        >
          <MenuItem
            disabled={locale === 'en'}
            className={clsx(commonStyle, '')}
            aria-selected
          >
            {t.language.english}
          </MenuItem>
        </Link>
        <Link
          href={router.asPath}
          locale="ja"
          passHref
          className="outline-none"
        >
          <MenuItem
            disabled={locale === 'ja'}
            className={clsx(commonStyle, '')}
          >
            {t.language.japanese}
          </MenuItem>
        </Link>
      </IconMeneBase>
    </div>
  )
}
