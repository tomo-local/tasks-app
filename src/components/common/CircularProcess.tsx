import { Spinner } from '@material-tailwind/react'

export default function CircularProcess() {
  return (
    <div className="absolute flex items-center justify-center w-full h-[100%] opacity-30 bg-main z-loading">
      <Spinner className="absolute w-16 h-16 text-white" />
    </div>
  )
}
