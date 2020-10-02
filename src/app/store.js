import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createInjectorsEnhancer, forceReducerReload } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";

//reducers
import createReducer from "app/rootReducer";

//saga
import rootSaga from "app/rootSaga";

export default function configureAppStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: combineReducers(createReducer),
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
        },
      }),
      ...middlewares,
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production",
    enhancers,
  });

  runSaga(rootSaga);

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept("app/rootReducer", () => {
      forceReducerReload(store);
    });
  }

  return store;
}
