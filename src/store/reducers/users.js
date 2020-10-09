import { createActions, createReducer } from 'reduxsauce'

/* Initial State */

const initialState = {
  listUsers: [],
}

export const getAllUsersSuccess = (state = initialState, { data }) => ({
  ...state,
  listUsers: data,
})

export const { Types, Creators } = createActions({
  getAllUsers: [],
  getAllUsersSuccess: ['data'],
})

export const users = {
  [Types.GET_ALL_USERS_SUCCESS]: getAllUsersSuccess,
}

export default createReducer(initialState, users)
