import { createStore } from 'redux'
import reducers from './reducers'
import state from './state'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default createStore(reducers, state, applyMiddleware(thunk))