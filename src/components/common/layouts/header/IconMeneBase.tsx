import { ReactNode } from 'react'
import clsx from 'clsx'
import type { MenuListProps } from '@material-tailwind/react'

import Menu from '@material-tailwind/react/components/Menu'
import MenuHandler from '@material-tailwind/react/components/Menu/MenuHandler'
import MenuList from '@material-tailwind/react/components/Menu/MenuList'
import IconButton from '@material-tailwind/react/components/IconButton'

interface Props extends MenuListProps {
  variant?: 'filled' | 'outlined' | 'gradient' | 'text'
  icon: ReactNode
  iconClassName?: string | undefined
}

export default function IconMeneBase({
  variant = "text",
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
          variant={variant}
          color="white"
          className={clsx('w-9 h-9 rounded-full hover:border', iconClassName)}
        >
          {icon}
        </IconButton>
      </MenuHandler>
      <MenuList
        className={clsx('p-0 mt-1', className)}
        {...props}
      />
    </Menu>
  )
}
