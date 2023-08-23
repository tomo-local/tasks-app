import Link from 'next/link'
import { useSetAtom, useAtomValue } from 'jotai/react'
import clsx from 'clsx'

import Card from '@material-tailwind/react/components/Card'
import {
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react/components/List'


import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import Cog8ToothIcon from '@heroicons/react/24/outline/Cog8ToothIcon'
import IdentificationIcon from '@heroicons/react/24/outline/IdentificationIcon'

import AvatarBase from '@/components/common/avatar/AvatarBase'
import IconMeneBase from '@/components/common/layouts/header/IconMeneBase'
import useLocale from '@/hooks/useLocale'
import useAuth from '@/hooks/useAuth'
import { circularProcessAtom } from '@/jotai/tools/atom'
import { userAtom } from '@/jotai/account/user'

const commonStyle =
  'py-1.5 rounded-none text-main hover:bg-sub hover:text-white focus:bg-sub focus:text-white'

export default function UserMenu() {
  const { t } = useLocale()
  const { signOut } = useAuth()
  const setCircular = useSetAtom(circularProcessAtom)
  const user = useAtomValue(userAtom)


  const handleLogout = async () => {
    setCircular(true)
    try {
      await signOut()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex items-center justify-center w-12">
      <IconMeneBase
        variant="gradient"
        icon={
          <AvatarBase
            username={user?.profile?.username}
            src={user?.avatarUrl}
            alt="avatar"
            size="sm"
          />
        }
      >
        <Card shadow={false} className="w-[260px] outline-none">
          <div className="flex min-h-[40px] p-3">
            <div className="relative flex-none w-16">
              <div>
                <AvatarBase
                  username={user?.profile?.username}
                  src={user?.avatarUrl}
                  alt="avatar"
                  size="md"
                  withBorder
                  className="w-12 h-12 border border-base-20"
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex-1">
                {user?.profile?.full_name}
              </div>
              <div className="flex-1">@{user?.profile?.username}</div>
            </div>
          </div>
          <hr />
          <List className="px-0 pb-0">
            <Link href={`/users/${user?.profile?.username}`}>
              <ListItem className={clsx(commonStyle, '')}>
                <ListItemPrefix>
                  <IdentificationIcon className="w-5 h-5" />
                </ListItemPrefix>
                {t.header.userIcon.profile}
              </ListItem>
            </Link>
            <Link href={'/setting/profile'}>
              <ListItem className={clsx(commonStyle, '')}>
                <ListItemPrefix>
                  <Cog8ToothIcon className="w-5 h-5" />
                </ListItemPrefix>
                {t.header.userIcon.setting}
              </ListItem>
            </Link>
            <hr />
            <ListItem
              className={clsx(commonStyle, 'pb-2')}
              onClick={handleLogout}
            >
              <ListItemPrefix>
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
              </ListItemPrefix>
              {t.header.userIcon.logout}
            </ListItem>
          </List>
        </Card>
      </IconMeneBase>
    </div>
  )
}
