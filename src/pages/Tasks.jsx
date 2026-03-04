import { useContext, useState, useEffect } from "react"
import { TaskContext } from "../context/TaskContext.jsx"
import { useSearchParams } from "react-router-dom"
import Container from "../components/Container.jsx"

function Tasks() {
  const { tasks, addTask } = useContext(TaskContext)
  const [text, setText] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const [filter, setFilter] = useState(searchParams.get("search") || "")

  useEffect(() => {
    setFilter(searchParams.get("search") || "")
  }, [searchParams])

  function handleSubmit(e) {
    e.preventDefault()
    addTask(text)
    setText("")
  }

  const filteredTasks = filter
    ? tasks.filter(t => t.toLowerCase().includes(filter.toLowerCase()))
    : tasks

  function handleSearchChange(e) {
    const value = e.target.value
    setFilter(value)
    if (value) {
      setSearchParams({ search: value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <Container>
      <h2>Mis Tareas</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribir tarea"
        />
        <button>Agregar</button>
      </form>

      <input
        type="text"
        placeholder="Buscar tarea"
        value={filter}
        onChange={handleSearchChange}
      />

      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => <li key={index}>{task}</li>)
        ) : (
          <li>No hay tareas</li>
        )}
      </ul>
    </Container>
  )
}

export default Tasks