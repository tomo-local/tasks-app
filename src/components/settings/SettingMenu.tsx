import Link from 'next/link'
import { useRouter } from 'next/router'

import List from '@material-tailwind/react/components/List'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import IdentificationIcon from '@heroicons/react/24/outline/IdentificationIcon'
import BellIcon from '@heroicons/react/24/outline/BellIcon'

import SettingMenuItem from '@/components/settings/menu/SettingMenuItem'

import useLocale from '@/hooks/useLocale'

export default function SettingMenu() {
  const { t } = useLocale()
  const { asPath } = useRouter()


  return (
    <div className="border-b-2 border-base-20 sm:h-full sm:min-w-[160px] bg-base-20">
      <div className="sm:min-w-[160px] p-0">
        <List className="!min-w-full p-0 pt-2 gap-0">
          <Link href={'/setting/account'} passHref>
            <SettingMenuItem
              icon={<UserIcon className="w-4 h-4" />}
              selected={asPath === '/setting/account'}
            >
              {t.page.setting.account}
            </SettingMenuItem>
          </Link>
          <Link href={'/setting/profile'} passHref>
            <SettingMenuItem
              icon={<IdentificationIcon className="w-4 h-4" />}
              selected={asPath === '/setting/profile'}
            >
              {t.page.setting.profile}
            </SettingMenuItem>
          </Link>
          <Link href={'/setting/notification'} passHref>
            <SettingMenuItem
              icon={<BellIcon className="w-4 h-4" />}
              selected={asPath === '/setting/notification'}
            >
              {t.page.setting.notification}
            </SettingMenuItem>
          </Link>
        </List>
      </div>
    </div>
  )
}
