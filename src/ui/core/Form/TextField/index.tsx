import React from 'react'

import MuiTextField, { TextFieldProps } from '@mui/material/TextField'

import { useFormContext } from 'react-hook-form'
import FormHelper from '../FormHelper'

export default function TextField({ size = 'small', ...restOfProps }: TextFieldProps) {
  const { register, formState } = useFormContext()
  const fieldName: any = restOfProps.name
  return (
    <FormHelper label='Username' errorMessage={formState?.errors?.[fieldName]?.message}>
      <MuiTextField {...register(fieldName)} size={size} {...restOfProps} />
    </FormHelper>
  )
}
