
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import reducers from 'store/reducers'
import sagas from 'store/saga'
import { history } from './history'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({}))
}

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)
middlewares.push(routerMiddleware(history))

const store = createStore(
  reducers(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

store.runSaga = sagaMiddleware.run
store.close = () => store.dispatch(END)
store.persist = () => persistStore(store)
store.runSaga(sagas)

export default store
