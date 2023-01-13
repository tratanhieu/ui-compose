import * as React from 'react'

import { CellStyled } from './styled'

export default React.forwardRef(function CustomColumn(props: any, ref: React.Ref<any>) {
  return <CellStyled ref={ref} {...props} />
})
