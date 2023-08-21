import Navbar from '@material-tailwind/react/components/Navbar'

import LocaleSelect from '@/components/common/layouts/header/LocaleSelect'
import NotificationMenu from '@/components/common/layouts/header/NotificationMenu'
import UserMenu from '@/components/common/layouts/header/UserMenu'

export default function Header() {
  return (
    <Navbar className="absolute top-0 h-12 max-w-full px-4 py-0 border-0 rounded-none z-header bg-main">
      <div className="flex h-full">
        <div className="flex-none w-20" />
        <div className=" grow" />
        <div className="flex flex-none">
          <NotificationMenu />
          <LocaleSelect />
          <UserMenu />
        </div>
      </div>
    </Navbar>
  )
}
