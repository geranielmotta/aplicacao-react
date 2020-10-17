import { createActions, createReducer } from 'reduxsauce'

const initialState = {
  listProjects: [],
  projects: {},
}

export const getAllProjectsSuccess = (state = initialState, { data }) => ({
  ...state,
  listProjects: data,
})

export const setOneProjectSuccess = (state = initialState, { projects }) => ({
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
  getAllProject: [],
  getAllProjectsSuccess: ['data'],
  addProject: ['project'],
  getOneProjects: ['id'],
  setOneProjectSuccess: ['project'],
  editOneProject: ['project'],
  projectClean: [''],
})

export const project = {
  [Types.GET_ALL_PROJECTS_SUCCESS]: getAllProjectsSuccess,
  [Types.EDIT_ONE_PROJECT]: editOneProject,
  [Types.SET_ONE_PROJECT_SUCCESS]: setOneProjectSuccess,
  [Types.PROJECT_CLEAN]: projectClean,
}

export default createReducer(initialState, project)
