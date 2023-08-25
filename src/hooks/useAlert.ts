import { useAtom } from 'jotai';
import { alertAtom } from '@/jotai/tools/atom';


export default function useAlert() {
  const [alert, setAlert] = useAtom(alertAtom)

  const showAlert = (color:string, message:string) => {
    setAlert({
      open: true,
      color,
      message
    })
  }

  const closeAlert = () => {
    setAlert({
      open: false,
      color: "",
      message: ""
    })
  }

  return {
    alert,
    showAlert,
    closeAlert,
  }
}