import { connectRouter } from 'connected-react-router'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loading from './loading'
import communication from './communication'
import projects from './projects'
import users from './users'

export default history =>
  persistCombineReducers(
    {
      key: 'aplicacao-react',
      storage,
      blacklist: ['loading', 'communication'],
    },
    {
      loading,
      communication,
      projects,
      users,
      router: connectRouter(history),
    }
  )
