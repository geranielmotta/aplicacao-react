import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { history } from 'store/history'

export default function ListProjects() {
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginBottom: '10px' }}
        onClick={() => history.push('/create-project')}
      >
        Cadastrar projeto
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome</StyledTableCell>
              <StyledTableCell align="right">Data</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.start}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

ListProjects.propTypes = {
  project: PropTypes.object,
}

const rows = [
  { name: 'Projeto 01', start: '16/11/20' },
  { name: 'Projeto 02', start: '16/11/20' },
  { name: 'Projeto 03', start: '16/11/20' },
  { name: 'Projeto 04', start: '16/11/20' },
  { name: 'Projeto 05', start: '16/11/20' },
]

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})
