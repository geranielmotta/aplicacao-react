import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

function Communication() {
  // const communication = useSelector(state => state.communication)

  useEffect(() => toaster.notify(
    ({ onClose }) => (
      <div
        onClick={ onClose }
        style={ { marginRight: '25px', marginTop: '20px' } }
      >
        teste
        <button onClick={onClose}>Fechar</button>
      </div>
    ),
    {
      position: 'top-right',
      duration: 5000
    }
  ), [])

  return null
}

export default Communication
