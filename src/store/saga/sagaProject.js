import { takeLatest, put, call, select } from 'redux-saga/effects'
import { Creators as projectActions } from 'store/reducers/projects'
import { Creators as LoadingActions } from 'store/reducers/loading'
import { Creators as CommunicationActions } from 'store/reducers/communication'
import navigate from 'store/reducers/router'
import {
  getAllProjects,
  getOneProject,
  addNewProject,
  editProject,
  deleteProject,
} from '../server/project/project'

function* doGetAllProject() {
  try {
    const { data } = yield call(getAllProjects)
    yield put(projectActions.getAllProjectsSuccess(data))
  } catch (error) {
    yield put(
      projectActions.failedCreateProject({
        status: 'danger',
        message: `Erro em obter os projetos: ${error}`,
      })
    )
  }
}

function* doGetOneProject({ id }) {
  try {
    const { data } = yield call(getOneProject, id)
    yield put(projectActions.setOneProjectSuccess(data.data))
    yield put(navigate.goCreateProject)
  } catch (error) {
    yield put(
      projectActions.failedCreateProject({
        status: 'danger',
        message: `Erro ao buscar o projeto: ${error}`,
      })
    )
  }
}

function* doCreateproject({ project }) {
  try {
    const result = yield call(addNewProject, project)

    if (result.data) {
      yield put(
        CommunicationActions.addCommunication({
          status: 'success',
          description: 'Projeto cadastrado com sucesso!',
        })
      )
      yield put(navigate.goListProject)
    }
  } catch (error) {
    yield put(
      CommunicationActions.addCommunication({
        status: 'error',
        description: `Erro ao cadastrar um projeto: ${error}`,
      })
    )
  } finally {
    yield put(LoadingActions.stopLoading())
    yield put(CommunicationActions.removeCommunication())
  }
}

function* doUpdateOneProject({ project }) {
  try {
    const result = yield call(editProject, project)

    if (result.data) {
      yield put(
        CommunicationActions.addCommunication({
          status: 'success',
          description: 'Projeto edita com sucesso!',
        })
      )
      yield put(navigate.goListProject)
    }
  } catch (error) {
    yield put(
      CommunicationActions.addCommunication({
        status: 'error',
        description: `Erro ao editar o projeto: ${project.name}`,
      })
    )
  } finally {
    yield put(LoadingActions.stopLoading())
    yield put(CommunicationActions.removeCommunication())
  }
}

function* doDeleteProject({ project }) {
  try {
    const result = yield call(deleteProject, project.id)

    if (result.data) {
      yield put(
        CommunicationActions.addCommunication({
          status: 'success',
          description: 'Projeto deletado com sucesso!',
        })
      )
      yield put(navigate.goListProject)
    }
  } catch (error) {
    yield put(
      CommunicationActions.addCommunication({
        status: 'error',
        description: `Erro ao deletar o projeto: ${project.name}`,
      })
    )
  } finally {
    yield put(LoadingActions.stopLoading())
    yield put(CommunicationActions.removeCommunication())
  }
}

function* SagaProject() {
  yield takeLatest('GET_ALL_PROJECT', doGetAllProject)
  yield takeLatest('ADD_PROJECT', doCreateproject)
  yield takeLatest('GET_ONE_PROJECT', doGetOneProject)
  yield takeLatest('EDIT_ONE_PROJECT', doUpdateOneProject)
  yield takeLatest('DELETE_PROJECT', doDeleteProject)
}

export default SagaProject
