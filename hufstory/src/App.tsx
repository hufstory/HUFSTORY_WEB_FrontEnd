import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import About from "./pages/About"
import Members from "./pages/Members"
import Recruit from "./pages/Recruit"
import Blog from "./pages/Blog"

// 모든 컴포넌트 전부 호출 (화면 하나하나 전부 다)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App;
