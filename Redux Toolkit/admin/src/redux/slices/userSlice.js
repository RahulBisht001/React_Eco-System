import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {

        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            const { idx } = action.payload
            state.splice(idx, 1)
        },
        deleteUsers(state, action) {

        }
    }
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUsers, removeUser } = userSlice.actions
console.log(userSlice.actions)

export default userSlice.reducer 