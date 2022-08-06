import React, { useEffect } from "react"
import { darkmodeStore } from "../stores"

const Darkmode = () => {
  const darkmode = darkmodeStore((state) => state.darkMode)
  const togglemode = darkmodeStore((state) => state.toggleDarkmode)

  useEffect(() => {
    if (darkmode) {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  })

  return (
    <label className="p-switch">
      <input
        type="checkbox"
        className="p-switch__input"
        checked={darkmode}
        onChange={togglemode}
        role="switch"
      />
      <span className="p-switch__slider"></span>
      <span className="p-switch__label">{darkmode ? "light" : "dark"}</span>
    </label>
  )
}

export default Darkmode
