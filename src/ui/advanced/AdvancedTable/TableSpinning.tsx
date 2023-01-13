import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import Table from '@/ui/core/Table'

export default function TableSpinning() {
  return (
    <Table.Row>
      <Table.Cell style={{ height: 179, textAlign: 'center' }} colSpan={5}>
        <CircularProgress />
        <p>Loading</p>
      </Table.Cell>
    </Table.Row>
  )
}
