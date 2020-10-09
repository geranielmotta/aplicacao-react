import axios from 'axios'
import url from '../router'

async function getAllProducts(token, max) {
  axios.defaults.headers.Authorization = `Bearer ${token}`
  return await axios.get(url.product.getAllProduct, {
    params: {
      productsByPage: max,
    },
  })
}

async function getOneProduct({ token, productId }) {
  axios.defaults.headers.Authorization = `Bearer ${token}`
  return await axios.get(url.product.getOneProduct + productId)
}

async function addNewProduct({ token, newProduct }) {
  // axios.defaults.headers.Authorization = `Bearer ${params.token}`
  return await axios.post(url.product.addProduct, newProduct)
}

async function editProduct({ token, newProduct }) {
  // axios.defaults.headers.Authorization = `Bearer ${params.token}`
  return await axios.put(url.product.putProduct, newProduct)
}

export { getAllProducts, getOneProduct, addNewProduct, editProduct }
