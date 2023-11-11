import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Alert from '@material-tailwind/react/components/Alert'
import Typography from '@material-tailwind/react/components/Typography'
import IconButton from '@material-tailwind/react/components/IconButton'

import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'

import useAlert from '@/hooks/useAlert'

type Props = {
  id: string
  color: 'success' | 'error' | 'warning' | 'info'
  message: string
}

const colorMap = {
  success: { line: 'border-l-success-base', icon: 'text-success-base' },
  error: { line: 'border-l-error-base', icon: 'text-error-base' },
  warning: { line: 'border-l-warning-base', icon: 'text-warning-base' },
  info: { line: 'border-l-info-base', icon: 'text-info-base' },
}

export default function AlertBase({ id, color, message }: Props) {
  const [open, setOpen] = useState(true)
  const { removeAlert } = useAlert()

  const handleClose = () => {
    setOpen(false)
    removeAlert(id)
  }

  useEffect(() => {
    setTimeout(() => {
      setOpen(false)
      removeAlert(id)
    }, 5000)
  })


  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 1 }}
    >
      <Alert
        open={open}
        className={clsx(
          '!w-auto bg-white rounded-md min-w-[240px] flex px-4 py-2 shadow-lg items-center justify-center border-l-4', colorMap[color].line
        )}
        action={
          <IconButton
            variant="text"
            onClick={handleClose}
            className="w-8 h-8 text-center align-middle transition-all rounded-md select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none"
          >
            <XMarkIcon className="w-6 h-6" />
          </IconButton>
        }
      >
        <div className="flex items-center justify-center gap-3">
          <CheckCircleIcon className={clsx("w-6 h-6", colorMap[color].icon)} />
          <div className="text-xs text-main">
            <Typography variant="h6">Success</Typography>
            {message}
          </div>
        </div>
      </Alert>
    </motion.div>
  )
}
