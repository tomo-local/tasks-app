import { useEffect } from 'react'
import clsx from 'clsx';

import { Alert as AlertBase } from '@material-tailwind/react/components/Alert'
import IconButton from '@material-tailwind/react/components/IconButton'
import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'

import useAlert from '@/hooks/useAlert'


export default function Alert() {
  const { alert, closeAlert } = useAlert()

  useEffect(() => {
    if (!alert.open) {
      return
    }
    setTimeout(() => closeAlert(), 3000)
  }, [alert, closeAlert])


  return (
    <AlertBase
      icon={<CheckCircleIcon className="w-6 h-6" />}
      open={alert.open}
      className={clsx(
        'absolute right-8 z-alert',
        '!w-auto font-normal text-green-500 bg-green-50 border-2 rounded-md border-green-400 min-w-[240px] top-14',
      )}
      action={
        <IconButton
          variant="text"
          onClick={closeAlert}
          className="align-middle select-none rounded-md font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] text-xs text-green-500 hover:bg-green-100  !absolute top-3 right-3"
        >
          <XMarkIcon className="w-6 h-6" />
        </IconButton>
      }
    >
      {alert.message}
    </AlertBase>
  )
}
