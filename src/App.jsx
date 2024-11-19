import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import Career from "./pages/Career"
import News from "./pages/News"
import Categories from "./pages/Categories"
import Project from "./pages/Project"
import Post from "./pages/Post"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="project/:id" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/news" element={<News />} />
      <Route path="/categories/:id" element={<Categories />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
