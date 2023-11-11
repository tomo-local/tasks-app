import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SettingMenu from '@/components/settings/SettingMenu'

type Props = {
  children: ReactNode
}

export default function SettingLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-full sm:flex-row">
      <SettingMenu />
      <div className="flex-1 overflow-y-scroll transition ease-in-out delay-75 opacity-100">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1 , x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
           >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
