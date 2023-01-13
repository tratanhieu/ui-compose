import React from 'react'

// Material UI
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
// Icons
import MoreVertIcon from '@mui/icons-material/MoreVert'
import LinkSharpIcon from '@mui/icons-material/LinkSharp'
import UpdateIcon from '@mui/icons-material/Update'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
// MonentJS
import moment from 'moment'

import Table from '@/ui/core/Table'
import useTable from '@/contexts/TableProvider/useTable'
import TableSpinning from './TableSpinning'

const STATUS_MAP: any = {
  ACTIVE: {
    label: 'Active',
    bgColor: '#1976d2',
    color: 'white',
  },
}
export default function TableBody() {
  const { state }: any = useTable()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  console.log(state)

  const RenderRows = () => {
    return state?.items?.map((item: any) => {
      return (
        <Table.Row key={item.id}>
          <Table.Cell>
            <Stack alignItems='center'>
              <img width={100} src={item.qrCodeImageUrl} />
              <Link href={item.qrCodeImageUrl} download={item.weddingName}>
                Download
              </Link>
            </Stack>
          </Table.Cell>
          <Table.Cell>
            <Stack>
              <Typography>{item.weddingName}</Typography>
              <Link href={item.urlPath}>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <LinkSharpIcon style={{ fontSize: 16 }} />
                  <Typography fontSize={14}>{item.urlPath}</Typography>
                </Stack>
              </Link>
            </Stack>
          </Table.Cell>
          <Table.Cell>
            <Stack>
              <Stack direction='row' alignItems='center' spacing={1}>
                <PermIdentityIcon fontSize='small' />
                <Typography fontSize={14}>Admin</Typography>
              </Stack>
              <Stack direction='row' alignItems='center' spacing={1}>
                <UpdateIcon fontSize='small' />
                <Typography fontSize={14}>{moment(item.lastUpdatedAt).format('hh:mm:ss - DD/MM/YYYY')}</Typography>
              </Stack>
            </Stack>
          </Table.Cell>
          <Table.Cell>
            <Chip
              label={STATUS_MAP[item.status].label}
              size='small'
              style={{
                backgroundColor: STATUS_MAP[item.status].bgColor,
                color: STATUS_MAP[item.status].color,
              }}
            />
          </Table.Cell>
          <Table.Cell>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  return (
    <Table.Body>
      {state?.loading && <TableSpinning />}
      <RenderRows />
    </Table.Body>
  )
}
