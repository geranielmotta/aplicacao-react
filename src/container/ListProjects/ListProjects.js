import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button, Icon } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { history } from 'store/history'
import { Creators as projectActions } from 'store/reducers/projects'
import moment from 'moment/moment'
import 'moment/locale/pt-br'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'

export default function ListProjects() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const listProject = useSelector(state => state.projects.listProjects)

  useEffect(() => {
    dispatch(projectActions.getAllProject())
  }, [])

  return (
    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
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
              <StyledTableCell>Data</StyledTableCell>
              <StyledTableCell>Opções</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listProject ? (
              listProject.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>
                    {moment(row.start).format('LLL')}
                  </StyledTableCell>
                  <StyledTableCell>
                    <EditOutlinedIcon
                      style={{ marginLeft: '10' }}
                      onClick={() =>
                        dispatch(projectActions.getOneProject(row.id))
                      }
                      id={`edit-${index}`}
                    />
                    <DeleteOutlinedIcon
                      style={{ marginLeft: '10' }}
                      onClick={() =>
                        dispatch(projectActions.deleteProject(row))
                      }
                      id={`delete-${index}`}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell
                  component="th"
                  scope="row"
                  colSpan={2}
                  style={{ textAlign: 'center' }}
                >
                  Nenhum projeto cadastrado
                </StyledTableCell>
              </StyledTableRow>
            )}
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
