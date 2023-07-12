import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Unstable_Grid2'
import Layout from '@/components/common/layouts/Layout'
import theme from '@/components/theme'
import useLocale from '@/hooks/useLocale'

export default function Login() {
  const { t } = useLocale()

  return (
    <Layout title="login">
      <Container component="main" maxWidth="xs" fixed>
        <div
          className={[
            'sm:mt-52',
            'sm:rounded-lg',
            'sm:border-2',
            'sm:shadow-lg',
            'sm:border-slate-400',
          ].join(' ')}
        >
          <div
            className={[
              'sm:border-b-2',
              'sm:border-slate-400',
              'mt-5',
              'sm:mt-0',
            ].join(' ')}
          >
            <div className="mx-4 my-2">{t.login.title}</div>
          </div>
          <div className="mt-8 mb-6 sm:mx-8">
            <Stack spacing={3}>
              <TextField
                type="text"
                size="small"
                label={t.login.form.email.label}
                required
              />
              <FormGroup>
                <TextField
                  type="text"
                  size="small"
                  label={t.login.form.password.label}
                  required
                />
                <FormControlLabel
                  className="mx-1"
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: theme.spacing(2.5) },
                    '& .MuiFormControlLabel-label': {
                      fontSize: theme.spacing(1.8),
                    },
                  }}
                  control={<Checkbox defaultChecked size="small" />}
                  label={t.login.form.password.checkbox}
                />
              </FormGroup>
              <div className="mx-3">
                <Link
                  href="#"
                  underline="none"
                  className="p-1 text-xs hover:rounded-md hover:bg-slate-200"
                >
                  {t.login.form.forgetPasswordLink}
                </Link>
              </div>
              <Grid container justifyContent="end">
                <Button
                  variant="contained"
                  className="px-6 py-2 rounded bg-slate-500"
                >
                  {t.login.form.submit}
                </Button>
              </Grid>
              <Grid container justifyContent="center">
                <Link href="#" color="inherit">
                  {t.login.form.changeSignUpButton}
                </Link>
              </Grid>
            </Stack>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
