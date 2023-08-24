import { ReactNode } from 'react'
import SettingMenu from './SettingMenu'

type Props = {
  children: ReactNode
}

export default function SettingLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-full sm:flex-row">
      <SettingMenu />
      <div className="flex-1 overflow-y-scroll">{children}</div>
    </div>
  )
}
