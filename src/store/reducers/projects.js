import { createActions, createReducer } from 'reduxsauce'

const initialState = {
  listProjects: [],
  projects: {},
}

export const getAllProjectsSuccess = (state = initialState, { data }) => ({
  ...state,
  listProjects: data,
})

export const setOneProjectsuccess = (state = initialState, { projects }) => ({
  ...state,
  projects: projects,
})

export const editOneProject = (state = initialState, { project }) => {
  const newListProjects = state.listProjects.map(value => {
    if (value.id === project.id) {
      return { ...value, project }
    }
    return value
  })
  return { ...state, listProjects: newListProjects }
}

export const projectClean = (state = initialState) => ({
  ...state,
  project: [],
})

export const { Types, Creators } = createActions({
  getAllProjects: [],
  getAllProjectsSuccess: ['data'],
  addProjects: ['projects'],
  getOneProjects: ['id'],
  setOneProjectsuccess: ['project'],
  editOneProject: ['project'],
  projectClean: [''],
})

export const product = {
  [Types.GET_ALL_PROJECTS_SUCCESS]: getAllProjectsSuccess,
  [Types.EDIT_ONE_PROJECT]: editOneProject,
  [Types.SET_ONE_PROJECT_SUCCESS]: setOneProjectsuccess,
  [Types.PROJECT_CLEAN]: projectClean,
}

export default createReducer(initialState, product)
