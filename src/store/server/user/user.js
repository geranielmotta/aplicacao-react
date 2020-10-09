import axios from 'axios'
import url from '../router'

async function getAllUsers() {
  const { data } = await axios.get(url.user.getAllUsers)
  return data
}

async function onDelete({ id }) {
  return await axios.delete(url.user.onDelete + id)
}

export {
  getAllUsers,
  onDelete,
}
