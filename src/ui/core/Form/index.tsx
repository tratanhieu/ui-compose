import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import Stack from '@mui/material/Stack'

import SelectBox from './SelectBox'
import TextField from './TextField'

import useYupValidationResolver from './useYupValidationResolver'

function Form({ resolver, children, onSubmit }: any) {
  const methods = useForm({ resolver })
  const handleOnSubmit = (data: any) => onSubmit(data)
  console.log(methods.formState.isDirty) // make sure formState is read before render to enable the Proxy

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        <Stack gap={1}>{children}</Stack>
      </form>
    </FormProvider>
  )
}

export default Object.assign(Form, {
  SelectBox,
  TextField,
})

export { useYupValidationResolver }
