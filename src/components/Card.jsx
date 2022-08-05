import React from "react"
import Button from "./Button"

const Card = ({ text, completed, date, completedTask, deleteTask }) => {
  return (
    <div className="col-4 p-card--highlighted">
      <p>{text}</p>
      <hr />
      <div className="row">
        <div className="col-2">
          <p>{completed ? "Done" : ""}</p>
        </div>
        <div className="col-2">
          <p>{date}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-2">
          <Button
            type={completed ? "--positive" : "--negative"}
            text={completed ? "Completed" : "Complete"}
            clickFuntion={completedTask}
          />
        </div>
        <div className="col-2">
          <Button
            type={"--negative"}
            text={"Delete Todo"}
            clickFuntion={deleteTask}
          />
        </div>
      </div>
    </div>
  )
}

export default Card
