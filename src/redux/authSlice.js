import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosConfig from '../axiosConfig.js'
const initialState = {
    email: null,
    password: null,
    message: null,
    token: window.localStorage.getItem('token') || null,
    isOkej: false
}
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({email, password}, {rejectWithValue}) => {
    try {
        const response = await axiosConfig.post('/auth/register', {email, password})
        if(response.data.token) {
            window.localStorage.setItem('token', response.data.token)
        }
        return response.data
    } catch(err) {
        console.log(err)
        return rejectWithValue(err.response?.data || 'Server error')
    }
})
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosConfig.post('/auth/login', { email, password }) // ✅ email
      if (response.data.token) {
        window.localStorage.setItem('token', response.data.token)
      }
      return response.data
    } catch (err) {
      console.log(err)
      return rejectWithValue(err.response?.data || "server error")
    }
  }
)
export const getMe = createAsyncThunk(
    'auth/getMe', async (_, {rejectWithValue}) => {
        try {
            const response = await axiosConfig.get('/auth/me')
            return response.data
        } catch(err) {
            console.log(err)
            return rejectWithValue(err.response?.data || "server error")
        }
    }
)
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.email = null
            state.password = null
            state.token = null
            state.isOkej = false
            window.localStorage.removeItem('token')
            console.log(2, state)
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.email = null
                state.password = null
                state.token = null
                state.isOkej = false
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.email = action.payload?.newUser.email
                state.password = action.payload?.newUser.password
                state.message = action.payload?.message
                state.token = action.payload?.token
                state.isOkej = true
                
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.message = action.payload?.message
            })

            //login
            .addCase(loginUser.pending, (state, action) => {
                state.email = null
                state.password = null
                state.token = null
                state.isOkej = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.email = action.payload?.user.email
                state.password = action.payload?.user.password
                state.message = action.payload?.message
                state.token = action.payload?.token
                state.isOkej = true
                
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.message = action.payload?.message
            })
            //me
            .addCase(getMe.pending, (state, action) => {
                state.email = null
                state.password = null
                state.token = null
                state.isOkej = false
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.email = action.payload?.user.email
                state.password = action.payload?.user.password
                state.message = action.payload?.message
                state.token = action.payload?.token
                state.isOkej = true
                
            })
            .addCase(getMe.rejected, (state, action) => {
                state.message = action.payload?.message
            })
    }
})
export const {logout} = authSlice.actions
export default authSlice.reducer