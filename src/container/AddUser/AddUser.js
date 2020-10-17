import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Creators as userActions } from 'store/reducers/users'
import { Input } from 'components'
export default function AddUser() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')

  function submit() {
    dispatch(
      userActions.createUser({
        name,
        userName,
      })
    )
  }

  return (
    <div style={{ flex: '3', display: 'flex', flexDirection: 'column' }}>
      <form className={classes.root} noValidate autoComplete="off">
        <Input
          id="name"
          label="Nome"
          variant="outlined"
          value={name}
          onChange={value => setName(value)}
        />
        <Input
          id="username"
          label="Apelido"
          variant="outlined"
          value={userName}
          onChange={value => setUserName(value)}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => submit}
        >
          Salvar
        </Button>
      </form>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))
