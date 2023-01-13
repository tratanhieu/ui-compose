import * as React from 'react'

import Cell from './Cell'
import Row from './Row'
import Body from './Body'
import Header from './Header'
import HeaderCell from './HeaderCell'

import { TableStyled } from './styled'

const Table = React.forwardRef(function CustomTable(props: any, ref: React.Ref<any>) {
  return <TableStyled {...props} ref={ref} />
})

export default Object.assign(Table, {
  Row,
  Cell,
  Body,
  Header,
  HeaderCell,
})
