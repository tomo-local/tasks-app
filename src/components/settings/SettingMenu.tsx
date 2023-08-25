import {
  List,
  ListItem
} from '@material-tailwind/react/components/List'
import Link from 'next/link'

export default function SettingMenu() {
  return (
    <div className="border-b-2 border-r-2 border-base-20 sm:h-full sm:min-w-[160px]">
      <div className="sm:min-w-[160px] p-0">
        <List className="!min-w-full px-0">
          <Link href={'/setting/account'}>
            <ListItem className="!w-auto group rounded-none py-1.5 text-sm font-normal text-main hover:bg-sub hover:text-white focus:bg-sub focus:text-white">
              Account
            </ListItem>
          </Link>
          <Link href={'/setting/profile'}>
            <ListItem className="!w-auto rounded-none py-1.5 text-sm font-normal text-main hover:bg-sub hover:text-white focus:bg-sub focus:text-white">
              Profile
            </ListItem>
          </Link>
          <Link href={'/setting/notification'}>
            <ListItem className="!w-auto rounded-none py-1.5 text-sm font-normal text-main hover:bg-sub hover:text-white focus:bg-sub focus:text-white">
              Notification
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  )
}
