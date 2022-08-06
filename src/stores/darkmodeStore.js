import create from "zustand"

const store = create((set) => ({
  darkMode: false,
  toggleDarkmode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}))

export default store
