import { useContext } from 'react'

import TableContext from '@/contexts/TableProvider/context'

export default function useTable() {
  return useContext(TableContext)
}
