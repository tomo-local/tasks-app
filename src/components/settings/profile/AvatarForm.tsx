import Image from 'next/image'
import { useAtom } from 'jotai'

import Button  from '@material-tailwind/react/components/Button'
import { avatarUrlAtom } from '@/jotai/account/user'
import useLocale from '@/hooks/useLocale'

export default function AvatarForm() {
  const [avatarUrl, setAvatarUrl] = useAtom(avatarUrlAtom)

  return (
    <div className="sm:mx-10">
      <form action="" className="w-full">
        <div className="flex flex-col gap-3">
          {avatarUrl && (
            <Image
              src={avatarUrl}
              alt="avatar"
              width={1000}
              height={1000}
              className="w-[280px] h-[280px] border rounded-xl border-sub"
            />
          )}

          <div className="flex flex-row items-center justify-center gap-2">
            <Button>Upload File</Button>
            <Button>Remove File</Button>
          </div>
        </div>
      </form>
    </div>
  )
}
