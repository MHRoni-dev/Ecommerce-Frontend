import { useDispatch, useSelector } from 'react-redux';

const { createSlice } = require('@reduxjs/toolkit');

const userAuthSlice = createSlice({
  name: 'auth',
  initialState: {
    email: '',
    expireAt: ''
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      state.expireAt = Date.now() + 1000 * 60 * 3 // 3 minutes
    },
    removeEmail: (state) => {
      state.email = '';
      state.expireAt = ''
    }
  }
})

export const useGetAuthEmail = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  if(Date.now() > auth.expireAt) {
    dispatch(removeEmail())
    return null
  }else{
    return auth.email
  }
}


export const { setEmail, removeEmail } = userAuthSlice.actions;
export default userAuthSlice.reducer