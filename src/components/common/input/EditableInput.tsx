import { useState, ChangeEvent, FocusEvent, KeyboardEvent, useEffect } from 'react'
import Input from '@material-tailwind/react/components/Input'
import type { InputProps } from '@material-tailwind/react';
import useAlert from '@/hooks/useAlert';

export type InputValue = string | undefined | null

interface Props extends InputProps {
  onSave?: (value?: InputValue) => Promise<void>
}


export default function EditableInput({
  ref,
  onSave,
  ...props
}: Props) {
  const { showAlert } = useAlert()
  const [value, setValue] = useState(props.defaultValue || props.value)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    setValue(props.defaultValue || props.value)
  }, [props.defaultValue, props.value])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event)
    !editing && setEditing(true)
    setValue(event.currentTarget.value)
  }

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    props.onBlur && props.onBlur(event)
    handleSave(event)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    props.onKeyDown && props.onKeyDown(event)
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      handleSave(event)
    }
  }

  const handleSave = async (
    event: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
  ) => {
    if (!editing || props.defaultValue === value || !onSave) {
      return
    }

    try {
      await onSave(event.currentTarget.value)
      setEditing(false)
    } catch (e: any) {
      editing && event.currentTarget.focus()
      showAlert("error", e.message)
    }
  }

  return (
    <Input
      {...props}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  )
}
