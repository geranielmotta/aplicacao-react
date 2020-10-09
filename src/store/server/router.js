
const project = {
  addPproject: `${process.env.REACT_APP_API_URL}/project`,
  getAllPprojects: `${process.env.REACT_APP_API_URL}/projects/`,
  getOnePproject: `${process.env.REACT_APP_API_URL}/project/`,
  putPproject: `${process.env.REACT_APP_API_URL}/project`,
  deletePproject: `${process.env.REACT_APP_API_URL}/project`,
}

const user = {
  getAllUser: `${process.env.REACT_APP_API_URL}/user`,
  onDelete: `${process.env.REACT_APP_API_URL}/user`,
}

export default {
  project,
  user,
}
