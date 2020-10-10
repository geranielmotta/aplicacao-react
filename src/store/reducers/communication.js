import { createReducer, createActions } from 'reduxsauce'

const initialState = {
  status: '',
  description: ''
}

export const addCommunication = (state = initialState, { communication }) => ({
  ...state,
  status: communication.status,
  description: communication.description
})

export const removeCommunication = () => ({
  state: initialState
})

export const { Types, Creators } = createActions({
  addCommunication: ['communication'],
  removeCommunication: null
})

export const communication = {
  [Types.ADD_COMMUNICATION]: addCommunication,
  [Types.REMOVE_COMMUNICATION]: removeCommunication
}

export default createReducer(initialState, communication)
