import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import About from "./pages/About"
import Teams from "./pages/Teams"
import Recruit from "./pages/Recruit"
import Blog from "./pages/Blog"

// 모든 컴포넌트 전부 호출 (화면 하나하나 전부 다)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App
