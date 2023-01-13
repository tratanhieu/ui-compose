import React from 'react'

import { RowStyled } from './styled'

export default function Row({ children, striped = true, ...rest }: any) {
  return (
    <RowStyled striped={striped} {...rest}>
      {children}
    </RowStyled>
  )
}
