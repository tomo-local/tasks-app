
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

import {
  List,
  ListItem,
} from '@material-tailwind/react/components/List'
import LanguageIcon from '@heroicons/react/24/outline/LanguageIcon'

import IconMeneBase from '@/components/common/layouts/header/IconMeneBase'
import useLocale from '@/hooks/useLocale'

const commonStyle =
  'py-3 rounded-none hover:bg-sub hover:text-white focus:bg-sub focus:text-white font-bold'

export default function LocaleSelect() {
  const { t, locale } = useLocale()
  const router = useRouter()

  return (
    <div className="w-12">
      <IconMeneBase
        icon={<LanguageIcon className="w-5 h-5" />}
      >
        <List className="min-w-[50px] p-0">
          <Link href={router.asPath} locale="en" passHref>
            <ListItem
              disabled={locale === 'en'}
              className={clsx(commonStyle, '')}
              aria-selected
            >
              {t.language.english}
            </ListItem>
          </Link>
          <Link href={router.asPath} locale="ja" passHref>
            <ListItem
              disabled={locale === 'ja'}
              className={clsx(commonStyle, '')}
            >
              {t.language.japanese}
            </ListItem>
          </Link>
        </List>
      </IconMeneBase>
    </div>
  )
}
