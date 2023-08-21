import BellIcon from '@heroicons/react/24/outline/BellIcon'
import Badge from '@material-tailwind/react/components/Badge'

import IconMeneBase from '@/components/common/layouts/header/IconMeneBase'

export default function NotificationMenu() {
  return (
    <div className="flex items-center justify-center">
      <Badge
        withBorder
        className="border-sub top-3 right-2.5"
        content=""
        invisible
      >
        <IconMeneBase icon={<BellIcon className="w-6 h-6" />}>
          notification
        </IconMeneBase>
      </Badge>
    </div>
  )
}
