import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todosList: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'mytodo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }

            state.todosList.push(newTodo)
        },

        removeTodo: (state, action) =>{
            state.todosList = state.todosList.filter((mytodo) => mytodo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer