import styled from '@emotion/styled'

const TableStyled = styled.table(() => {
  return {
    width: '100%',
  }
})

const RowStyled = styled.tr(() => {
  return {
    '&:nth-of-type(even)': {
      background: 'rgb(248 250 252 / 1)',
    },
    '&:nth-of-type(odd)': {
      background: 'rgb(255 255 255 / 1)',
    },
  }
})

const CellStyled = styled.td(() => {
  return {
    padding: '12px 16px',
    fontSize: '0.9375rem',
  }
})

const HeaderCellStyled = styled.th(() => {
  return {
    padding: '8px 16px',
    color: 'rgba(75, 85, 99, 1)',
    fontSize: '0.9375rem',
    fontWeight: 'bold',
    textAlign: 'left',
  }
})

const TableHeaderStyled = styled.thead(() => {
  return {
    borderBottom: 'solid 1px #e1e1e1',
    backgroundColor: '#fafafa',
  }
})

export { TableStyled, RowStyled, CellStyled, TableHeaderStyled, HeaderCellStyled }
