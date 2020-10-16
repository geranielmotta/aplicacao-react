import React, { lazy } from 'react'
import { ListProduct, Product, PersonSearch } from '../icons'
import colors from 'styles/colors'

const CreateProjects = lazy(() => import('views/guest/CreateProject'))
const CreateUser = lazy(() => import('views/guest/CreateUser/CreateUser'))
const ListProjects = lazy(() => import('views/guest/ListProjects'))
const ListUsers = lazy(() => import('views/guest/ListUsers'))

const routes = {
  createProjects: {
    path: '/create-project',
    Component: CreateProjects,
    exact: true,
    menu: false,
    menuExact: false,
    name: 'Cadastro',
    Icon: props => <Product size={20} color={colors.white} />,
  },
  listProjects: {
    path: '/list-projects',
    Component: ListProjects,
    exact: true,
    menu: true,
    menuExact: false,
    name: 'Projetos',
    Icon: props => <ListProduct size={20} color={colors.white} />,
  },
  listUsers: {
    path: '/list-users',
    Component: ListUsers,
    exact: true,
    menu: true,
    menuExact: false,
    name: 'Usuários',
    Icon: props => <PersonSearch size={20} color={colors.white} />,
  },
  createUsers: {
    path: '/create-user',
    Component: CreateUser,
    exact: true,
    menu: false,
    menuExact: false,
    name: 'Usuários',
    Icon: props => <PersonSearch size={20} color={colors.white} />,
  },
}

export default routes
