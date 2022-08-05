import React from "react"

const Button = ({ type, text, clickFuntion }) => {
  return (
    <button className={`p-button${type}`} onClick={clickFuntion}>
      {text}
    </button>
  )
}

export default Button
