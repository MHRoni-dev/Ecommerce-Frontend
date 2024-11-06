import { api } from './api';

const { configureStore } = require('@reduxjs/toolkit');
const { setupListeners } = require('@reduxjs/toolkit/query');

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export default store