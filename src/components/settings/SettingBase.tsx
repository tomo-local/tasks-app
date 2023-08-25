import { ReactNode } from 'react'
import Typography from '@material-tailwind/react/components/Typography'
import { Card, CardBody } from '@material-tailwind/react/components/Card'

type Props = {
  title: string
  children: ReactNode
}

export default function SettingBase({ title, children }:Props) {
  return (
    <div className="m-5">
      <div>
        <Typography variant="h3" className="p-1 text-main">
          {title}
        </Typography>
        <hr className="border border-main" />
        <Card shadow={false} className="bg-base-10">
          <CardBody className="flex flex-wrap w-full bg-base-10 sm:space-x-5">
            {children}
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
