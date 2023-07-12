import useLocale from '@/hooks/useLocale'
import { Button } from '@mui/material'

export default function Home() {
  const { t } = useLocale()

  return (
    <div>
      {t.home}

      <Button variant="contained">test</Button>
    </div>
  )
}
