import { ReactNode } from 'react'

import type { ListItemProps } from '@material-tailwind/react';
import ListItem from '@material-tailwind/react/components/List/ListItem'
import ListItemPrefix from '@material-tailwind/react/components/List/ListItemPrefix'
import ListItemSuffix from '@material-tailwind/react/components/List/ListItemSuffix'
import clsx from 'clsx';

interface Props extends ListItemProps {
  prefixIcon?: ReactNode
  suffixIcon?: ReactNode
}

export default function DrawerItem({ prefixIcon, suffixIcon, ref, ...props }: Props) {
  const { children, className, selected } = props
  return (
    <ListItem className={clsx('my-1 p-2 sm:min-h-[38px] h-[38px]', className)} {...props}>
      {prefixIcon && <ListItemPrefix>{prefixIcon}</ListItemPrefix>}
      {children}
      {suffixIcon && <ListItemSuffix>{suffixIcon}</ListItemSuffix>}
    </ListItem>
  )
}
