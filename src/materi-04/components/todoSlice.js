import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    filter: "all",
    search: ""
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload.text,
        category: action.payload.category,
        time: action.payload.time,
        completed: false
      })
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload)
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(t => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    }
  }
})

export const { addTodo, deleteTodo, toggleTodo, setFilter, setSearch } = todoSlice.actions
export default todoSlice.reducer
