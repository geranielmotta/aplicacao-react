import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { Creators as projectActions } from 'store/reducers/projects'
import { Input } from 'components'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Grid from '@material-ui/core/Grid'
import moment from 'moment/moment'
import 'moment/locale/pt-br'

export default function AddProject() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [start, setStart] = useState('')
  const [description, setDescription] = useState('')

  const project = useSelector(state => state.projects.project)

  useEffect(() => {
    if (project) {
      setName(project.name)
      setDescription(project.description)
      setStart(moment(project.start).format('YYYY-MM-DD'))
    }
  }, [project])

  function submit() {
    if (name && start && description) {
      dispatch(
        projectActions.addProject({
          name,
          start,
          description,
        })
      )
    }
  }

  function submitEdit() {
    if (name && start && description) {
      dispatch(
        projectActions.editOneProject({
          id: project.id,
          name,
          start,
          description,
        })
      )
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Input
            id="name"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={value => setName(value)}
          />
        </Grid>
        <Grid item xs>
          <Input
            type="date"
            id="start"
            label="Data inicío"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            value={start}
            onChange={value => setStart(value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            rowsMax={20}
            rowsMin={10}
            aria-label="description"
            placeholder="Descrição do projeto"
            defaultValue={description}
            onChange={({ target }) => setDescription(target.value)}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => (project.id ? submitEdit() : submit())}
          >
            Salvar
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    display: 'flex',
  },
}))
