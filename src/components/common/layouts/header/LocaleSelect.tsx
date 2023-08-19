
import { useRouter } from 'next/router'
import Link from 'next/link'


import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from '@material-tailwind/react/components/Menu'
import IconButton from '@material-tailwind/react/components/IconButton'

import LanguageIcon from '@heroicons/react/24/outline/LanguageIcon'

import useLocale from '@/hooks/useLocale';


export default function LocaleSelect() {
  const { t } = useLocale()
  const router = useRouter()

  return (
    <div className="w-12">
      <Menu>
        <MenuHandler>
          <IconButton
            variant="text"
            color="white"
            className="m-0.5 rounded-full hover:border"
          >
            <LanguageIcon className="w-5 h-5" />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <Link href={router.asPath} locale="en" passHref>
            <MenuItem>{t.language.english}</MenuItem>
          </Link>
          <Link href={router.asPath} locale="ja" passHref>
            <MenuItem>{t.language.japanese}</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  )
}
