import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducer/Root.reducer'
import { rootSaga } from './Saga/Root.saga'


const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk ,sagaMiddleware ]

export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)


sagaMiddleware.run(rootSaga);

// render the applicationnn