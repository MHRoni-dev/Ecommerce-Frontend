const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    user: {},
    accessToken: ''
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLogin = true
      state.user = action.payload
      state.accessToken = action.accessToken
    },
    logoutUser: (state) => {
      state.isLogin = false
      state.user = {}
      state.accessToken = ''  
    }
  }
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer