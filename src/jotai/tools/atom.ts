import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'

export const circularProcessAtom = atom(false)

export const alertAtom = atom({
  open: false, color: "red", message: ""
})

export const uiSettingAtom = atomWithStorage('ui', { drawer: false })