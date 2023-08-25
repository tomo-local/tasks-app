import React from 'react'

import Typography from '@material-tailwind/react/components/Typography'
import { Select, Option } from '@material-tailwind/react/components/Select'
import Switch from '@material-tailwind/react/components/Switch'
import IconButton from '@material-tailwind/react/components/IconButton'

import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import LinkIcon from '@heroicons/react/24/outline/LinkIcon'
import MinusIcon from '@heroicons/react/24/outline/MinusIcon'

import EditableInput from '@/components/common/input/EditableInput'
import EditableTextarea from '@/components/common/input/EditableTextarea'

import useLocale from '@/hooks/useLocale'
import useProfileControl from '@/hooks/user/useProfileControl'

export default function ProfileForm() {
  const { t } = useLocale()
  const {
    profile,
    handleFullNameSave,
    handleLocationSave,
    handleSelfIntroduction,
  } = useProfileControl()

  return (
    <form className="flex flex-col gap-4">
      <div>
        <Typography variant="h5">
          {t.setting.profile.baseProfile.title}
        </Typography>
        <hr className="border border-main" />
      </div>
      <div className="flex flex-col gap-4">
        <EditableInput
          label={t.setting.profile.baseProfile.fullName}
          className=""
          onSave={handleFullNameSave}
          defaultValue={profile?.full_name ? profile?.full_name : ''}
        />
      </div>
      <div>
        <EditableTextarea
          label={t.setting.profile.baseProfile.description}
          onSave={handleSelfIntroduction}
          defaultValue={profile?.description ? profile?.description : ''}
        />
      </div>
      <div className="flex flex-col gap-4">
        <EditableInput
          label={t.setting.profile.baseProfile.location}
          className=""
          onSave={handleLocationSave}
          defaultValue={profile?.location ? profile?.location : ''}
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
              <Typography variant="small" color="gray" className="font-normal">
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
          <EditableInput
            type="url"
            className="!border-none"
            labelProps={{
              className: 'hidden',
            }}
            containerProps={{
              className:
                '!border ring-4 ring-transparent rounded-lg border-blue-gray-200 focus:!border-gray-900 focus:!border-2',
            }}
            defaultValue={'https://twitter.com/tomo_ToT_'}
            icon={<LinkIcon className="w-4 h-4" />}
          />
          <IconButton>
            <MinusIcon className="w-4 h-4" />
          </IconButton>
        </div>
        {profile?.social_link?.map((a, i) => (
          <EditableInput key={`link_${i}`} value={a} />
        ))}
        <div className="flex space-x-1">
          <EditableInput
            label={t.setting.profile.socialLink.addLink}
            icon={<LinkIcon className="w-4 h-4" />}
          />
          <IconButton>
            <PlusIcon className="w-4 h-4" />
          </IconButton>
        </div>
      </div>
    </form>
  )
}
