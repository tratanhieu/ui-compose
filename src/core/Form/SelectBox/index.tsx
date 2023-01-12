import React from 'react'

import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import { useFormContext, Controller } from 'react-hook-form'
import FormHelper from '../FormHelper'
import Placeholder from './Placeholder'

import useStyles from './useStyles'

export default function SelectBox({
  label,
  name,
  options = [],
  placeholder = 'Select an options',
  defaultValue = '',
}: any) {
  const { control, formState } = useFormContext()
  const classes = useStyles()

  console.log('classes', classes)
  return (
    <FormHelper label={label} errorMessage={formState.errors?.[name]?.message}>
      <Controller
        render={({ field }) => (
          <Select
            displayEmpty
            MenuProps={{
              classes: {
                list: classes.list,
              },
              variant: 'menu',
            }}
            renderValue={field.value !== '' ? undefined : () => <Placeholder>{placeholder}</Placeholder>}
            {...field}
          >
            {options.map((item: any) => {
              return (
                <MenuItem key={item?.value} value={item?.value}>
                  {item?.label}
                </MenuItem>
              )
            })}
          </Select>
        )}
        control={control}
        name={name}
        defaultValue={defaultValue}
      />
    </FormHelper>
  )
}
