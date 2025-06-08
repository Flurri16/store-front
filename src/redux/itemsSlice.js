import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from '../axiosConfig.js'
const initialState = {
    items: [],
    message: null
}
export const addItem = createAsyncThunk(
    'items/addItem', async (params, {rejectWithValue}) => {
        try {
            const {data} = await axios.post('/upload', params)
            return data
        } catch(err) {
            console.log(err)
            return rejectWithValue(err.response.data)
        }
    }
)
export const getAll = createAsyncThunk(
    'items/getAll', async (_, {rejectWithValue}) => {
        try {
            const {data} = await axios.get('/items')
            return data
        } catch(err) {
            console.log(err)
            return rejectWithValue(err.response.data)
        }
    }
)
export const deleteItem = createAsyncThunk(
    'items/deleteItem', async (id, {rejectWithValue}) => {
        try {
            const {data} = await axios.delete(`/delete/${id}`)
            return data
        } catch(err) {
            console.log(err)
            return rejectWithValue(err.response.data)
        }
    }
)
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {

    }, extraReducers: (builder) => {
        builder
        .addCase(addItem.pending, (state, action) => {
            state.items = []
            state.message = null
        })
        .addCase(addItem.fulfilled, (state, action) => {
        state.items.push(action.payload?.newItem)
        // console.log(action.payload)
        state.message = action.payload?.message
    })
        .addCase(addItem.rejected, (state, action) => {
        state.items = null
        state.message = action.payload.message
    })
    //getAll
        .addCase(getAll.pending, (state, action) => {
        state.items = []
        state.message = null
    })
        .addCase(getAll.fulfilled, (state, action) => {
        state.items = action.payload
        // console.log(action.payload)
        state.message = action.payload.message
    })
        .addCase(getAll.rejected, (state, action) => {
        state.items = null
        state.message = action.payload.message
    })
    //delete
        .addCase(deleteItem.pending, (state, action) => {
        // state.items = []
        // state.message = null
    })
        .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload._id)
        // console.log(action.payload)
        state.message = action.payload?.message
    })
        .addCase(deleteItem.rejected, (state, action) => {
        state.items = null
        state.message = action.payload.message
    })
    }
})

export default itemsSlice.reducer