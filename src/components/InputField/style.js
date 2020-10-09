import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    padding: '20px',
    fontSize: '0.9rem',
  },
  label: {
    width: '100%',
    height: '20px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#303030',
    display: 'block',
    marginBottom: '4px',
  },
  input: {
    width: '100%',
  },
}))

export default useStyles
