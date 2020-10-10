import axios from 'axios'
import url from '../router'

async function getAllProjects() {
  return await axios.get(url.project.getAllProduct)
}

async function getOneProject({ id }) {
  return await axios.get(url.project.getOneproject + id)
}

async function addNewProject({ project }) {
  return await axios.post(url.project.addproject, project)
}

async function editProject({ project }) {
  return await axios.put(url.project.putproject, project)
}

export { getAllProjects, getOneProject, addNewProject, editProject }
