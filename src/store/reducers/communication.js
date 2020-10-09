import { createReducer, createActions } from 'reduxsauce'

const initialState = {
  open: false,
  type: '',
  title: '',
  message: '',
}

export const addCommunication = (state = initialState, { communication }) => {
  const {
    message,
    title,
    type,
  } = communication

  return {
    ...state,
    open: true,
    type: type,
    title: title,
    message: message,
  }
}

export const removeCommunication = () => ({
  open: false,
  type: '',
  title: '',
  message: '',
})

export const { Types, Creators } = createActions({
  addCommunication: ['communication'],
  removeCommunication: null,
})

export const communication = {
  [Types.ADD_COMMUNICATION]: addCommunication,
  [Types.REMOVE_COMMUNICATION]: removeCommunication,
}

export default createReducer(initialState, communication)
