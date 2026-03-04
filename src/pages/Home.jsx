import { Link } from "react-router-dom"
import Container from "../components/Container.jsx"

function Home() {
  return (
    <Container>
      <h1>Mi App de Tareas</h1>
      <Link to="/tasks">Ir a Mis Tareas</Link>
    </Container>
  )
}

export default Home