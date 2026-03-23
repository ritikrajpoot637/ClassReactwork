import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'
import { Theme } from '../utils/ThemeContext';

const Login = () => {
    const navigate=useNavigate();
    const {setUser}=useContext(Theme);
    const handle=(e)=>{
      e.preventDefault();
      const email=e.target.email.value;
      const password=e.target.password.value;
      let data=JSON.parse(localStorage.getItem('data'));
      
      if(data.email==email&&data.password==password){
        
        setUser(data.firstName);
        navigate('/product')
      }
      else{
        alert("User is not Registered");

      }

    }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          {/* Card with shadow for a clean floating look */}
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4 p-sm-5">
              <h2 className="text-center fw-bold mb-4">Welcome Back</h2>
              
              <form onSubmit={handle}>
                {/* Email Input */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control py-2 rounded-3" 
                    placeholder="name@example.com" 
                    name='email'
                    required 
                  />
                </div>

                {/* Password Input */}
                <div className="mb-2">
                  <div className="d-flex justify-content-between">
                    <label className="form-label fw-semibold">Password</label>
                    
                  </div>
                  <input
                    name='password' 
                    type="password" 
                    className="form-control py-2 rounded-3" 
                    placeholder="••••••••" 
                    required 
                  />
                </div>

                

                {/* Login Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg fw-bold rounded-pill">
                    Log In
                  </button>
                </div>

                {/* Link to Registration */}
                <p className="text-center mt-4 text-muted small">
                  New here? <Link to='/' className="text-decoration-none fw-bold">Create account</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
