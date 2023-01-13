import React from 'react'

import Divider from '@mui/material/Divider'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import useTable from '@/contexts/TableProvider/useTable'

export default function TablePagination() {
  const { state }: any = useTable()

  return (
    <Stack
      display={!state?.loading ? 'flex' : 'none'}
      justifyContent='space-between'
      alignItems='center'
      direction='row'
    >
      <Pagination count={10} color='primary' shape='rounded' showFirstButton showLastButton />
      <Stack direction='row' divider={<Divider orientation='vertical' flexItem />} spacing={2}>
        <Typography fontSize={14}>
          <span>Show&nbsp;</span>
          <select>
            <option>10</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>&nbsp;items per page</span>
        </Typography>
        <Typography fontSize={14}>
          <span>1 - 10 of 69 items</span>
        </Typography>
      </Stack>
    </Stack>
  )
}
