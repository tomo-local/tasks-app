import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'

export const circularProcessAtom = atom(false)

type AlertType = {
  id: string
  color: string
  message: string
}

export const alertAtom = atom<AlertType[]>([])

export const uiSettingAtom = atomWithStorage('ui', { drawer: false })