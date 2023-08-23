import { Card , CardBody } from '@material-tailwind/react/components/Card'
import Typography from '@material-tailwind/react/components/Typography'
import Input from '@material-tailwind/react/components/Input'
import Textarea  from '@material-tailwind/react/components/Textarea'
import { Select, Option }  from '@material-tailwind/react/components/Select';
import Switch from '@material-tailwind/react/components/Switch';

import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import LinkIcon from '@heroicons/react/24/outline/LinkIcon'
import MinusIcon from '@heroicons/react/24/outline/MinusIcon'

import { useAtom } from 'jotai';

import useLocale from '@/hooks/useLocale'
import { profileAtom, avatarUrlAtom } from '@/jotai/account/user';
import { Button, IconButton } from '@material-tailwind/react';
import Image from 'next/image';

export default function YourProfile() {
  const { t } = useLocale()
  const [profile, setProfile] = useAtom(profileAtom)
  const [avatarUrl, setAvatarUrl] = useAtom(avatarUrlAtom)

  return (
    <div className="m-5">
      <div className="">
        <Typography variant="h3" className="p-1 text-main">
          {t.setting.profile.title}
        </Typography>
        <hr className="border border-main" />
        <Card shadow={false} className="bg-base-10">
          <CardBody className="flex flex-wrap w-full gap-5 bg-base-10">
            <div className="flex justify-center flex-none">
              <div className="mx-10">
                <form action="" className="w-full">
                  <div className="flex flex-col gap-3">
                    {avatarUrl && (
                      <Image
                        src={avatarUrl}
                        alt="avatar"
                        width={1000}
                        height={1000}
                        className="w-[300px] h-[300px] border rounded-xl border-sub"
                      />
                    )}

                    <div className="flex flex-row items-center justify-center gap-2">
                      <Button> Upload File</Button>
                      <Button> Remove File</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-1">
              <form className="">
                <div className="flex flex-col gap-4">
                  <div>
                    <Typography variant="h5">
                      {t.setting.profile.baseProfile.title}
                    </Typography>
                    <hr className="border border-main" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Input
                      label={t.setting.profile.baseProfile.fullName}
                      className=""
                      value={profile?.full_name ? profile?.full_name : ''}
                    />
                  </div>
                  <div>
                    <Textarea
                      label={t.setting.profile.baseProfile.selfIntroduction}
                      value={
                        profile?.self_introduction
                          ? profile?.self_introduction
                          : ''
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Input
                      label={t.setting.profile.baseProfile.location}
                      className=""
                      value={profile?.location ? profile?.location : ''}
                    />
                  </div>
                  <div className="flex flex-col flex-wrap gap-4">
                    <Select label={t.setting.profile.baseProfile.baseLanguage}>
                      <Option value="ja">{t.language.japanese}</Option>
                      <Option value="en">{t.language.english}</Option>
                    </Select>
                  </div>
                  <div>
                    <Typography variant="h5">
                      {t.setting.profile.publicSetting.title}
                    </Typography>
                    <hr className="border border-main" />
                  </div>
                  <div>
                    <Switch
                      label={
                        <div>
                          <Typography color="blue-gray" className="font-medium">
                            {t.setting.profile.publicSetting.public}
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                          >
                            {t.setting.profile.publicSetting.description}
                          </Typography>
                        </div>
                      }
                      defaultChecked={profile?.public}
                      containerProps={{
                        className: '-mt-5',
                      }}
                    />
                  </div>
                  <div>
                    <Typography variant="h5">
                      {t.setting.profile.socialLink.title}
                    </Typography>
                    <hr className="border border-main" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex space-x-1">
                      <Input
                        type="url"
                        className="!border-none"
                        labelProps={{
                          className: 'hidden',
                        }}
                        containerProps={{
                          className:
                            '!border ring-4 ring-transparent rounded-lg border-blue-gray-200 focus:!border-gray-900 focus:!border-2',
                        }}
                        value={'https://twitter.com/tomo_ToT_'}
                        icon={<LinkIcon className="w-4 h-4" />}
                      />
                      <IconButton>
                        <MinusIcon className="w-4 h-4" />
                      </IconButton>
                    </div>
                    {profile?.social_link?.map((a, i) => (
                      <Input key={`link_${i}`} value={a} />
                    ))}
                    <div className="flex space-x-1">
                      <Input
                        label={t.setting.profile.socialLink.addLink}
                        icon={<LinkIcon className="w-4 h-4" />}
                      />
                      <IconButton>
                        <PlusIcon className="w-4 h-4" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
