import Typography from '@material-tailwind/react/components/Typography'
import { Select, Option } from '@material-tailwind/react/components/Select'
import Switch from '@material-tailwind/react/components/Switch'
import IconButton from '@material-tailwind/react/components/IconButton'

import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import LinkIcon from '@heroicons/react/24/outline/LinkIcon'
import MinusIcon from '@heroicons/react/24/outline/MinusIcon'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { object, string } from 'yup'


import EditableInput from '@/components/common/input/EditableInput'
import EditableTextarea from '@/components/common/input/EditableTextarea'

import useLocale from '@/hooks/useLocale'
import useProfileControl from '@/hooks/user/useProfileControl'

export default function ProfileForm() {
  const { t } = useLocale()

  const { profile, handleFullNameSave, handleLocationSave, handleDescription } =
    useProfileControl()

  return (
    <form className="flex flex-col gap-4">
      <div>
        <Typography variant="h5">{t.profile.baseProfile.title}</Typography>
        <hr className="border border-main" />
      </div>
      <div className="flex flex-col gap-4">
        <EditableInput
          label={t.profile.baseProfile.fullName.label}
          className=""
          onSave={handleFullNameSave}
          defaultValue={profile?.full_name ? profile?.full_name : ''}
        />
      </div>
      <div>
        <EditableTextarea
          label={t.profile.baseProfile.description.label}
          onSave={handleDescription}
          defaultValue={profile?.description ? profile?.description : ''}
        />
      </div>
      <div className="flex flex-col gap-4">
        <EditableInput
          label={t.profile.baseProfile.location.label}
          className=""
          onSave={handleLocationSave}
          defaultValue={profile?.location ? profile?.location : ''}
        />
      </div>
      <div className="flex flex-col flex-wrap gap-4">
        <Select
          label={t.profile.baseProfile.baseLanguage.label}
          value={
            profile?.base_language == 'ja'
              ? t.language.japanese
              : t.language.english
          }
        >
          <Option value="ja">{t.language.japanese}</Option>
          <Option value="en">{t.language.english}</Option>
        </Select>
      </div>
      <div>
        <Typography variant="h5">{t.profile.publicSetting.title}</Typography>
        <hr className="border border-main" />
      </div>
      <div>
        <Switch
          label={
            <div>
              <Typography color="blue-gray" className="font-medium">
                {t.profile.publicSetting.public.label}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {t.profile.publicSetting.description}
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
        <Typography variant="h5">{t.profile.socialLink.title}</Typography>
        <hr className="border border-main" />
      </div>
      <div className="space-y-1">
        {profile?.social_link?.map((a, i) => (
          <div key={`link_${i}`} className="flex space-x-1">
            <EditableInput
              type="url"
              key={`link_${i}`}
              value={a}
              className="!border-none"
              labelProps={{
                className: 'hidden',
              }}
              containerProps={{
                className:
                  '!border ring-4 ring-transparent rounded-lg border-blue-gray-200 focus:!border-gray-900 focus:!border-2',
              }}
              icon={<LinkIcon className="w-4 h-4" />}
            />
            <IconButton>
              <MinusIcon className="w-4 h-4" />
            </IconButton>
          </div>
        ))}
        <div className="flex space-x-1">
          <EditableInput
            label={t.profile.socialLink.addLink}
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
