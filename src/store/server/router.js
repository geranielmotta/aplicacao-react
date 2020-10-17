const project = {
  addProject: `${process.env.REACT_APP_API_URL}/project`,
  getAllProject: `${process.env.REACT_APP_API_URL}/project`,
  getOneProject: `${process.env.REACT_APP_API_URL}/project/`,
  putProject: `${process.env.REACT_APP_API_URL}/project/`,
  deleteProject: `${process.env.REACT_APP_API_URL}/project/`,
}

const user = {
  getAllUser: `${process.env.REACT_APP_API_URL}/user`,
  onDelete: `${process.env.REACT_APP_API_URL}/user`,
}

export default {
  project,
  user,
}
