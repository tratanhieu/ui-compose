import React from 'react'

export default function Body({ children, ...rest }: any) {
  return <tbody {...rest}>{children}</tbody>
}
