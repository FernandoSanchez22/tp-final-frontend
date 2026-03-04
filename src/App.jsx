
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Tasks from "./pages/Tasks"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App