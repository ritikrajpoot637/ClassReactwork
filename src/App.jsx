import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import About from './AboutNested.jsx/About'
import Home from './Pages/Home'
import Blog from './BlogDynmic/Blog'
import { Contact } from './Pages/Contact'
import { AboutComp } from './AboutNested.jsx/AboutComp'
import AboutTeam from './AboutNested.jsx/AboutTeam'
import BlogComp from './BlogDynmic/BlogComp'
import ErrorOfBlog from './BlogDynmic/ErrorOfBlog'

const App = () => {
  return (
  
    <BrowserRouter>
     
   <nav className="nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
      </nav>  
     

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
           <Route path='AboutComp' element={<AboutComp/>} />
           <Route path='AboutTeam' element={<AboutTeam/>}/>

        </Route>
        <Route path='/blog' element={<Blog/>}/>
         <Route path='/blog/:id' element={<BlogComp/>}/>
     


        
        <Route path='*' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
