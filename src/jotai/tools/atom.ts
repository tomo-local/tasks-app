import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'

export const circularProcessAtom = atom(false)

export type AlertType = {
  id: string
  color: "success" | "error" | "warning" | "info"
  message: string
}

export const alertAtom = atom<AlertType[]>([])

export const uiSettingAtom = atomWithStorage('ui', { drawer: false })