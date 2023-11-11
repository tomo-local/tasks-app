import { ReactNode } from 'react'
import clsx from 'clsx'
import {
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react/components/List'

import type { ListItemProps } from '@material-tailwind/react'

interface Props extends ListItemProps {
  icon: ReactNode
}

export default function SettingMenuItem({ icon, ref, ...props }: Props) {
  const { className, children, selected } = props
  return (
    <ListItem
      className={clsx(
        '!w-auto rounded-none py-2 text-xs font-normal text-main hover:bg-base-10',
        className,
        selected && "bg-base-10"
      )}
      {...props}
    >
      {icon && <ListItemPrefix>{icon}</ListItemPrefix>}
      {children}
    </ListItem>
  )
}