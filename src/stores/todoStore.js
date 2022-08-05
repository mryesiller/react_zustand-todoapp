import create from "zustand"

const store = create((set) => ({
  todos: [
    { id: 0, text: "Design Website", completed: false, date: Date.now() },
    {
      id: 1,
      text: "Find example about zustand",
      completed: true,
      date: Date.now(),
    },
  ],
  addTodo: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length,
          text: todo,
          completed: false,
          date: Date.now(),
        },
      ],
    })),
  completeTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}))

export default store
