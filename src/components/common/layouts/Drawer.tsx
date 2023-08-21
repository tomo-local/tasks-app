import { useState } from 'react'
import { Card, Typography, List, IconButton } from '@material-tailwind/react'
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
  InboxIcon,
  Bars3Icon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid'
import DrawerItem from './drawer/DrawerItem'
import clsx from 'clsx'
import Link from 'next/link'

export default function Drawer() {
  const [open, setOpen] = useState(true)

  return (
    <div
      className={clsx(
        'absolute sm:relative sm:left-0 h-screen w-0 z-header',
        open ? 'sm:min-w-[200px] min-w-[300px]' : 'sm:w-[52px]',
      )}
    >
      <div className={clsx('absolute sm:-right-10 top-1 pl-2')}>
        <IconButton
          variant="text"
          className="rounded-full hover:border"
          size="md"
          onClick={() => setOpen(!open)}
        >
          <ChevronDoubleRightIcon
            className={clsx(
              'sm:w-5 sm:h-5 transform w-0 text-base-00',
              open && 'rotate-180',
            )}
          />
          <Bars3Icon className={clsx('w-5 h-5 sm:hidden text-base-00')} />
        </IconButton>
      </div>
      <div className="flex w-full h-full pt-12">
        <Card className="w-full rounded-none">
          <List
            className={clsx('sm:min-w-full', !open && 'invisible sm:visible')}
          >
            <Link href={'/dashboard'}>
              <DrawerItem
                prefixIcon={
                  <PresentationChartBarIcon
                    className={clsx('sm:h-5 sm:w-5', open && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !open && 'invisible')}
                >
                  Dashboard
                </Typography>
              </DrawerItem>
            </Link>
            <Link href={'/projects/list'}>
              <DrawerItem
                prefixIcon={
                  <ShoppingBagIcon
                    className={clsx('sm:h-5 sm:w-5', open && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !open && 'invisible')}
                >
                  Projects
                </Typography>
              </DrawerItem>
            </Link>
            <Link href={'/tasks/list'}>
              <DrawerItem
                prefixIcon={
                  <ShoppingBagIcon
                    className={clsx('sm:h-5 sm:w-5', open && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !open && 'invisible')}
                >
                  Tasks
                </Typography>
              </DrawerItem>
            </Link>
            <hr className="my-2 border-blue-gray-50" />
            <Link href={''}>
              <DrawerItem
                prefixIcon={
                  <InboxIcon
                    className={clsx('sm:h-5 sm:w-5', open && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !open && 'invisible')}
                >
                  Inbox
                </Typography>
              </DrawerItem>
            </Link>
            <Link href={'/setting'}>
              <DrawerItem
                prefixIcon={
                  <Cog6ToothIcon
                    className={clsx('sm:h-5 sm:w-5', open && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !open && 'invisible')}
                >
                  Settings
                </Typography>
              </DrawerItem>
            </Link>
          </List>
        </Card>
      </div>
    </div>
  )
}
