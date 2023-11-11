import { AnimatePresence } from 'framer-motion'

import AlertBase from '@/components/common/alert/AlertBase'
import useAlert from '@/hooks/useAlert'

export default function AlertList() {
  const { alerts } = useAlert()

  return (
    <AnimatePresence mode="wait">
      <div className="absolute m-1 space-y-2 right-8 z-alert top-12">
        {alerts?.map((alert) => (
          <AlertBase key={alert.id} {...alert} />
        ))}
      </div>
    </AnimatePresence>
  )
}
