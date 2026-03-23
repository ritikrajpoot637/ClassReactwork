
// ... (Other imports stay the same)
import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link, Form, Outlet } from 'react-router-dom' 
import About from './AboutNested.jsx/About'
import Home from './Pages/Home'

import { Contact } from './Pages/Contact'
import { AboutComp } from './AboutNested.jsx/AboutComp'
import AboutTeam from './AboutNested.jsx/AboutTeam'
import BlogComp from './BlogDynmic/BlogComp'
import ErrorOfBlog from './BlogDynmic/ErrorOfBlog'
import ProductDetail from './Product/ProductDetail'
import Login from './Forms/Login'
import Registration from './Forms/Registration'
import Header from './utils/Header'
import ThemeContext from './utils/ThemeContext'




const MainRoot = () => {
  return (
    <>
      <Header />
      <main className="py-4"> {/* Adds consistent padding to every page */}
        <Outlet />
      </main>
      <footer className="py-4 text-center opacity-50">
        <small>© 2024 Your Store Name</small>
      </footer>
    </>
  );
};

const App = () => {
  const Blog = React.lazy(() => import("./BlogDynmic/Blog"));

  return (
    <BrowserRouter>
      <ThemeContext>
        <Suspense fallback={
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }>
          <Routes>
            {/* Auth Routes (No Header) */}
            <Route path='/' element={<Registration />} />
            <Route path='/login' element={<Login />} />

            {/* Protected Routes (With Header) */}
            <Route element={<MainRoot />}>
              <Route path='/product' element={<Home />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/about' element={<About />}>
                <Route path='AboutComp' element={<AboutComp />} />
                <Route path='AboutTeam' element={<AboutTeam />} />
              </Route>
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:id' element={<BlogComp />} />
            </Route>

            <Route path='*' element={<ErrorOfBlog/>} />
          </Routes>
        </Suspense>
      </ThemeContext>
    </BrowserRouter>
  );
};

export default App;
