import IconButton from '@material-tailwind/react/components/IconButton'

import BellIcon from '@heroicons/react/24/outline/BellIcon'

export default function NotificationMenu() {
  return (
    <div className="w-12">
      <IconButton
        variant="text"
        color="white"
        className="m-0.5 rounded-full hover:border"
      >
        <BellIcon className="w-6 h-6" />
      </IconButton>
    </div>
  )
}
