import {
  useState,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useEffect,
  BaseSyntheticEvent,
} from 'react'
import Textarea from '@material-tailwind/react/components/Textarea'
import type { TextareaProps } from '@material-tailwind/react'
import useAlert from '@/hooks/useAlert'

export type InputValue = string | undefined | null

interface Props extends TextareaProps {
  onSave: (value?: InputValue) => Promise<void>
}

export default function EditableInput({ ref, onSave, ...props }: Props) {
  const { showAlert } = useAlert()
  const [value, setValue] = useState(props.defaultValue || props.value)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    setValue(props.defaultValue || props.value)
  }, [props.defaultValue, props.value])

  const onFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    props.onFocus && props.onFocus(event)
  }

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange && props.onChange(event)
    setEditing(true)
    setValue(event.currentTarget.value)
  }

  const onBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    props.onBlur && props.onBlur(event)
    editing && handleSave(event)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    props.onKeyDown && props.onKeyDown(event)
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      handleSave(event)
    }
  }

  const handleSave = async (
    event:
      | FocusEvent<HTMLTextAreaElement>
      | KeyboardEvent<HTMLTextAreaElement>
      | BaseSyntheticEvent<HTMLInputElement>,
  ) => {
    if (!editing || props.defaultValue === value) {
      return
    }

    try {
      await onSave(event.currentTarget.value)
      setEditing(false)

      event?.currentTarget?.blur()
      event?.target?.blur()
    } catch (e: any) {
      editing && event?.currentTarget?.focus()
      editing && event?.target?.blur()

      showAlert('error', e.message)
    }
  }

  return (
    <Textarea
      {...props}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  )
}
