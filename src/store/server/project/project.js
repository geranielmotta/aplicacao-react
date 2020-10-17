import axios from 'axios'
import url from '../router'

async function getAllProjects() {
  const { data } = await axios.get(url.project.getAllProject)
  return data
}

async function getOneProject(id) {
  return axios.get(url.project.getOneProject + id)
}

async function addNewProject(project) {
  return await axios.post(url.project.addProject, project)
}

async function editProject(project) {
  return await axios.put(url.project.putProject + project.id, project)
}

async function deleteProject(id) {
  return await axios.delete(url.project.deleteProject + id)
}

export {
  getAllProjects,
  getOneProject,
  addNewProject,
  editProject,
  deleteProject,
}
