import React from 'react'

import Stack from '@mui/material/Stack'

import Table from '@/ui/core/Table'
import TableProvider from '@/contexts/TableProvider'

import TableBody from './TableBody'
import TablePagination from './TablePagination'

export default function AdvancedTable({ onInitialTable }: any) {
  return (
    <TableProvider onInitial={onInitialTable}>
      <Stack spacing={2}>
        <Table>
          <Table.Header>
            <Table.HeaderCell style={{ width: 132 }}>QR Code</Table.HeaderCell>
            <Table.HeaderCell>Info</Table.HeaderCell>
            <Table.HeaderCell>Updated</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Header>
          <TableBody />
        </Table>
        <TablePagination />
      </Stack>
    </TableProvider>
  )
}
