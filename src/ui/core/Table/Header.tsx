import React from 'react'

import { TableHeaderStyled } from './styled'

export default function Header({ children, ...rest }: any) {
  return (
    <TableHeaderStyled {...rest}>
      <tr>{children}</tr>
    </TableHeaderStyled>
  )
}
