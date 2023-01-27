import storage from "redux-persist/lib/storage";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import testReducer from "../pages/home/redux/slice";
import layoutReducer from "../layouts/redux/slice";
import loginReducer from "../pages/login/redux/slice";

const reducers = combineReducers({
  test: testReducer,
  layout: layoutReducer,
  login: loginReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
    serializableCheck: false
  }),
});

export let persisStore = persistStore(store);
