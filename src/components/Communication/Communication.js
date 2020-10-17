import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import toaster from 'toasted-notes'
import 'toasted-notes/src/styles.css'
import Alert from '@material-ui/lab/Alert'

function Communication() {
  const communication = useSelector(state => state.communication)

  useEffect(() => {
    communication.description &&
      toaster.notify(
        ({ onClose }) => (
          <Alert
            severity={communication.status}
            onClick={() => onClose()}
            style={{ marginRight: '25px', marginTop: '20px' }}
          >
            {communication.description}
          </Alert>
        ),
        {
          position: 'top-right',
          duration: 5000,
        }
      )
  }, [communication])

  return null
}

export default Communication
