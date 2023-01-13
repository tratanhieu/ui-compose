import * as React from 'react'

import Typography from '@mui/material/Typography'
import { HeaderCellStyled } from './styled'

export default React.forwardRef(function CustomColumn({ children, ...rest }: any, ref: React.Ref<any>) {
  return (
    <HeaderCellStyled ref={ref} {...rest}>
      <Typography>{children}</Typography>
    </HeaderCellStyled>
  )
})
