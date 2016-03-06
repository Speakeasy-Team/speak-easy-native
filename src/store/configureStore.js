import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { rootReducer, entitiesReducer } from '../reducers'

const reducers = combineReducers({
  root: rootReducer,
  entities: entitiesReducer,
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducers, initialState)

  return store
}
