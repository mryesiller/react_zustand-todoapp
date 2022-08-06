import React, { useRef } from "react"
import moment from "moment"
import { Button, Card, Darkmode } from "../components"
import { todoStore } from "../stores"

const Home = () => {
  const inputRef = useRef()

  const todos = todoStore((state) => state.todos)
  const addTodo = todoStore((state) => state.addTodo)
  const deleteTodo = todoStore((state) => state.deleteTodo)
  const completed = todoStore((state) => state.completeTodo)

  const addTodoFunc = () => {
    addTodo(inputRef.current.value)
    inputRef.current.value = ""
  }

  return (
    <section>
      <div className="row">
        <h2>Todo App with Zustand</h2>
        <Darkmode />
        <div className="col-4">
          <input type="text" name="" placeholder="Add Todo" ref={inputRef} />
        </div>
        <div className="col-2">
          <Button
            type={"--positive"}
            text={"Add Todo"}
            clickFuntion={addTodoFunc}
          />
        </div>
      </div>
      <hr />
      <div className="p-strip">
        <div className="row">
          {todos.map((todo, index) => (
            <Card
              key={index}
              text={todo.text}
              completed={todo.completed}
              date={moment(todo.date).format("DD MMM YYYY")}
              completedTask={() => completed(todo.id)}
              deleteTask={() => deleteTodo(todo.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
