import React, { useReducer, useEffect } from 'react'

import TableContext from './context'

const initialState = {
  enableSelectionRow: false,
  items: [],
  loading: false,
  selectedRows: {},
}

const actions = {
  SET_ITEMS: 'SET_ITEMS',
  SELECT_ROW: 'SELECT_ROW',
  REMOVE_ROW: 'REMOVE_ROW',
  RESET_SELECTED_ROWS: 'RESET_SELECTED_ROWS',
  SELECT_ALL_ROWS: 'SELECT_ALL_ROWS',
  SET_LOADING: 'SET_LOADING',
}

// Action must include { type, payload:? }
function reducer(state: any, action: any) {
  switch (action?.type) {
    case actions.SET_ITEMS:
      return {
        ...state,
        ...action?.payload,
      }
    case actions.SELECT_ROW:
      return {
        ...state,
        selectedRows: {
          ...state.selectedRows,
          [action?.payload?.rowId]: action?.payload?.value,
        },
      }
    case actions.REMOVE_ROW:
      return {
        ...state,
        selectedRows: action.payload.selectedRows,
      }
    case actions.RESET_SELECTED_ROWS:
      return {
        ...state,
        selectedRows: action.payload.selectedRows,
      }
    case actions.SELECT_ALL_ROWS:
      return {
        ...state,
        selectedRows: action.payload.selectedRows,
      }
    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      }
    default:
      throw new Error()
  }
}

export default function TableProvider({ hasSelectionRow, onInitial, children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const selectRow = (rowId: string, value: any) => {
    dispatch({ type: actions.SELECT_ROW, payload: { rowId, value } })
  }

  const removeRow = (rowId: string) => {
    const currentState = state?.selectedRows
    delete currentState[rowId]
    dispatch({
      type: actions.REMOVE_ROW,
      payload: { selectedRows: currentState },
    })
  }

  const resetSelectedRows = () => {
    dispatch({
      type: actions.RESET_SELECTED_ROWS,
      payload: { selectedRows: {} },
    })
  }

  const selectAllRows = () => {
    const selectedRows: any = {}
    state?.items?.forEach((item: any) => {
      console.log(item)
      selectedRows[`${item?.uuid}`] = item
    })
    dispatch({
      type: actions.RESET_SELECTED_ROWS,
      payload: { selectedRows },
    })
  }

  const setItems = (items: any) => {
    dispatch({
      type: actions.SET_ITEMS,
      payload: { items, loading: false },
    })
  }

  const setLoading = (loadingState: boolean) => {
    dispatch({
      type: actions.SET_LOADING,
      payload: { loading: loadingState },
    })
  }

  useEffect(() => {
    if (onInitial) {
      setLoading(true)
      onInitial().then((items: any[]) => {
        // console.log(items);
        setItems(items)
      })
    }
  }, [onInitial])

  const contextValue = {
    state,
    hasSelectionRow,
    setItems,
    selectRow,
    removeRow,
    resetSelectedRows,
    selectAllRows,
  }

  return <TableContext.Provider value={contextValue}>{children}</TableContext.Provider>
}
