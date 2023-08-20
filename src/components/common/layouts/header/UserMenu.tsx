import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSetAtom } from 'jotai/react'

import Avatar from '@material-tailwind/react/components/Avatar'
import Card from '@material-tailwind/react/components/Card'
import {
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react/components/List'

import clsx from 'clsx'

import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import Cog8ToothIcon from '@heroicons/react/24/outline/Cog8ToothIcon'
import IdentificationIcon from '@heroicons/react/24/outline/IdentificationIcon'

import IconMeneBase from '@/components/common/layouts/header/IconMeneBase'
import useLocale from '@/hooks/useLocale'
import { circularProcessAtom } from '@/jotai/tools/atom'
import { supabase } from '@/utils/supabase'

const commonStyle =
  'py-1.5 rounded-none hover:bg-sub hover:text-white focus:bg-sub focus:text-white'

export default function UserMenu() {
  const { t } = useLocale()
  const router = useRouter()
  const setCircular = useSetAtom(circularProcessAtom)


  const handleLogout = async () => {
    setCircular(true)
    try {
      await supabase.auth.signOut()
      setTimeout(() => router.refresh(), 500)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-12">
      <IconMeneBase icon={<Avatar alt="avatar" className="w-6 h-6" />}>
        <Card shadow={false} className="w-[250px] m-0">
          <List className="px-0 pb-0">
            <Link href={'/'}>
              <ListItem className={clsx(commonStyle, '')}>
                <ListItemPrefix>
                  <IdentificationIcon className="w-5 h-5" />
                </ListItemPrefix>
                {t.header.userIcon.profile}
              </ListItem>
            </Link>
            <Link href={'/'}>
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
