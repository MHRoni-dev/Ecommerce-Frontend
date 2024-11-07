import { api } from './api';
import userReducer  from '@/features/user/userSlice';
import authReducer from '@/features/auth/userAuthSlice';
import cartReducer from '@/features/cart/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const { configureStore, combineReducers } = require('@reduxjs/toolkit');
const { setupListeners } = require('@reduxjs/toolkit/query');


const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,

    // other slices
    user: userReducer,
    auth: authReducer,
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
export default store