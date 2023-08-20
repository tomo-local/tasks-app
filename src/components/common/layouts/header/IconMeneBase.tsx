import { ReactNode } from 'react'
import clsx from 'clsx'
import type { MenuListProps } from '@material-tailwind/react'

import Badge from '@material-tailwind/react/components/Badge'
import Menu from '@material-tailwind/react/components/Menu'
import MenuHandler from '@material-tailwind/react/components/Menu/MenuHandler'
import MenuList from '@material-tailwind/react/components/Menu/MenuList'
import IconButton from '@material-tailwind/react/components/IconButton'

interface Props extends MenuListProps {
  icon: ReactNode
  iconClassName?: string | undefined
}

export default function IconMeneBase({
  icon,
  iconClassName,
  className,
  ref,
  ...props
}: Props) {
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <IconButton
          variant="text"
          color="white"
          className={clsx('m-0.5 rounded-full hover:border', iconClassName)}
        >
          {icon}
        </IconButton>
      </MenuHandler>
      <MenuList className={clsx('p-0', className)} {...props} />
    </Menu>
  )
}
