import React, { lazy } from 'react'
import { ListProduct, Product, PersonSearch } from '../icons'
import colors from 'styles/colors'

const CreateProjects = lazy(() => import('views/guest/CreateProject'))
const SearchProjects = lazy(() => import('views/guest/SearchProjects'))
const ListUsers = lazy(() => import('views/guest/ListUsers/ListUsers'))

const routes = {
  createProjects: {
    path: '/create-projects',
    Component: CreateProjects,
    exact: true,
    menu: false,
    menuExact: false,
    name: 'Cadastro',
    Icon: props => <Product size={20} color={colors.white} />,
  },
  listProjects: {
    path: '/list-projects',
    Component: SearchProjects,
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
}

export default routes
