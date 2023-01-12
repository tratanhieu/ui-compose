import React, { ReactNode } from 'react'
import useStyles from './useStyles'

type PlaceholderProps = {
  children: ReactNode
}

export default function Placeholder({ children }: PlaceholderProps) {
  const classes: any = useStyles()
  return <div className={classes.placeholder}>{children}</div>
}
