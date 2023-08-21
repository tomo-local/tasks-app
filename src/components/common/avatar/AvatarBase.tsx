import Avatar from '@material-tailwind/react/components/Avatar'
import clsx from 'clsx'

import { IconButton, type AvatarProps } from '@material-tailwind/react'

interface Props extends AvatarProps {
  username?: string
  src: string | undefined
}

const sizeType = {
  xs: {
    width: 'w-6',
    height: 'h-6',
    borderRadius: 'rounded-md',
  },
  sm: {
    width: 'w-9',
    height: 'h-9',
    borderRadius: 'rounded-md',
  },
  md: {
    width: 'w-12',
    height: 'h-12',
    borderRadius: 'rounded-lg',
  },
  lg: {
    width: 'w-[58px]',
    height: 'h-[58px]',
    borderRadius: 'rounded-lg',
  },
  xl: {
    width: 'w-[74px]',
    height: 'h-[74px]',
    borderRadius: 'rounded-xl',
  },
  xxl: {
    width: 'w-[110px]',
    height: 'h-[110px]',
    borderRadius: 'rounded-2xl',
  },
}

export default function AvatarBase({ username, ref, ...props }: Props) {
  const { src, className, size } = props

  const sizeStyle = size ? sizeType[size] : sizeType.md

  return src ? (
    <Avatar {...props} className={clsx("",className)} />
  ) : (
    <div
      className={clsx(
        'relative align-middle select-none font-sans font-medium text-center uppercase transition-all w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white rounded-full bg-base-10',
        [className, sizeStyle],
      )}
    >
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="text-lg text-sub">
          {username?.slice(0, 1).toUpperCase()}
        </div>
      </span>
    </div>
  )
}