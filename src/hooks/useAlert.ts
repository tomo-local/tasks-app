import { v4 } from 'uuid'
import { useAtom } from 'jotai';
import { alertAtom } from '@/jotai/tools/atom';

export default function useAlert() {
  const [alerts, setAlert] = useAtom(alertAtom)

  const showAlert = (
    color: 'success' | 'error' | 'warning' | 'info',
    message: string,
  ) => {
    setAlert([{ id: v4(), color, message }, ...alerts])
  }

  const removeAlert = (id: string) => {
    setTimeout(() => {
      setAlert((a) => a.filter((alert) => alert.id !== id))
    }, 1000)
  }

  return {
    alerts,
    showAlert,
    removeAlert,
  }
}