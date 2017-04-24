import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducers from '../reducers'

const createStoreProd = () => createStore(
  reducers,
  applyMiddleware(
    thunk
  )
)

export default createStoreProd
