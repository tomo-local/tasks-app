import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'
import { useAtom } from 'jotai';

import Card from '@material-tailwind/react/components/Card'
import Typography from '@material-tailwind/react/components/Typography'
import List from '@material-tailwind/react/components/List'
import IconButton from '@material-tailwind/react/components/IconButton'

import HomeIcon from '@heroicons/react/24/solid/HomeIcon'
import PresentationChartBarIcon from '@heroicons/react/24/solid/PresentationChartBarIcon'
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon'
import ClipboardDocumentCheckIcon from '@heroicons/react/24/solid/ClipboardDocumentCheckIcon'
import Cog8ToothIcon from '@heroicons/react/24/solid/Cog8ToothIcon'
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon'
import ChevronDoubleRightIcon from '@heroicons/react/24/solid/ChevronDoubleRightIcon'

import useLocale from '@/hooks/useLocale'
import DrawerItem from '@/components/common/layouts/drawer/DrawerItem'
import { uiSettingAtom } from '@/jotai/tools/atom';

export default function Drawer() {
  const router = useRouter()
  const { t } = useLocale()
  const [uiSetting, setUiSetting] = useAtom(uiSettingAtom)

  return (
    <div
      className={clsx(
        'absolute sm:relative sm:left-0 h-screen w-0 z-header',
        uiSetting.drawer ? 'sm:min-w-[200px] min-w-[300px]' : 'sm:w-[52px]',
      )}
    >
      <div className={clsx('absolute sm:-right-10 top-1 pl-2')}>
        <IconButton
          variant="text"
          className="rounded-full hover:border"
          size="md"
          onClick={() => setUiSetting({ drawer: !uiSetting.drawer })}
        >
          <ChevronDoubleRightIcon
            className={clsx(
              'sm:w-5 sm:h-5 transform w-0 text-base-00',
              uiSetting.drawer && 'rotate-180',
            )}
          />
          <Bars3Icon className={clsx('w-5 h-5 sm:hidden text-base-00')} />
        </IconButton>
      </div>
      <div className="flex w-full h-full pt-12">
        <Card className="w-full rounded-none">
          <List
            className={clsx('sm:min-w-full', !uiSetting.drawer && 'hidden sm:block')}
          >
            <Link href={'/home'} passHref className="outline-none">
              <DrawerItem
                selected={router.asPath.includes('/home')}
                prefixIcon={
                  <HomeIcon
                    className={clsx('sm:h-5 sm:w-5', uiSetting.drawer && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !uiSetting.drawer && 'invisible')}
                >
                  {t.drawer.home.title}
                </Typography>
              </DrawerItem>
            </Link>
            <Link href={'/'} passHref className="outline-none">
              <DrawerItem
                selected={router.asPath === '/'}
                prefixIcon={
                  <PresentationChartBarIcon
                    className={clsx('sm:h-5 sm:w-5', uiSetting.drawer && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !uiSetting.drawer && 'invisible')}
                >
                  {t.drawer.dashboard.title}
                </Typography>
              </DrawerItem>
            </Link>
            <Link href={'/projects/list'} passHref className="outline-none">
              <DrawerItem
                selected={router.asPath.includes('/projects')}
                prefixIcon={
                  <ClipboardDocumentCheckIcon
                    className={clsx('sm:h-5 sm:w-5', uiSetting.drawer && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !uiSetting.drawer && 'invisible')}
                >
                  {t.drawer.projects.title}
                </Typography>
              </DrawerItem>
            </Link>
            <Link href={'/tasks/list'} passHref className="outline-none">
              <DrawerItem
                selected={router.asPath.includes('/tasks')}
                prefixIcon={
                  <CheckCircleIcon
                    className={clsx('sm:h-5 sm:w-5', uiSetting.drawer && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !uiSetting.drawer && 'invisible')}
                >
                  {t.drawer.tasks.title}
                </Typography>
              </DrawerItem>
            </Link>
            <hr className="my-2 border-blue-gray-50" />
            <Link href={'/setting/account'} passHref className="outline-none">
              <DrawerItem
                selected={router.asPath.includes('/setting')}
                prefixIcon={
                  <Cog8ToothIcon
                    className={clsx('sm:h-5 sm:w-5', uiSetting.drawer && 'h-5 w-5')}
                  />
                }
              >
                <Typography
                  className={clsx('font-normal', !uiSetting.drawer && 'invisible')}
                >
                  {t.drawer.setting.title}
                </Typography>
              </DrawerItem>
            </Link>
          </List>
        </Card>
      </div>
    </div>
  )
}
