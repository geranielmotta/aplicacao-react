import React, { lazy } from 'react'
import { ListProduct, Product, PersonSearch } from '../icons'
import colors from 'styles/colors'

const CreateProjects = lazy(() => import('views/authenticated/CreateProjects'))
const SearchProjects = lazy(() => import('views/authenticated/SearchProjects'))
const ListUsers = lazy(() => import('views/authenticated/ListUsers/ListUsers'))

const routes = {
  home: {
    path: '/home',
    Component: Home,
    exact: true,
    menu: true,
    name: 'Home',
    Icon: props => <House size={20} color={colors.white} />,
  },
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
