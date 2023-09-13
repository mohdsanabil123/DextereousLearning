import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
// import { AuthContext } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  // const { setToken } = useContext(AuthContext);

  const [credential, setCredential] = useState({
    phone_number: "",
    password: "",
  });

  const inputHandler = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value
    })
  }

  const FormHandler = async (e) => {
    e.preventDefault()
    // Validation
    if (credential.phone_number === '') {
        Swal.fire({
            title: 'Validation error!',
            text: 'Please enter your phone number',
            icon: 'warning',
        })
    }
    else if (credential.password === '') {
        Swal.fire({
            title: 'Validation error!',
            text: 'Please enter your password',
            icon: 'warning',
        })
    }
    else {

      try {
        const res =  await axios.post("http://127.0.0.1:8000/api/token-auth/", {
          "username": credential.phone_number,
          "password": credential.password
        })
        const token = await (res.data.token)
        localStorage.setItem('token', token)
      
        navigate('/')
      } 
      catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid credentials!',
            icon: 'error'
        })
      }
    }
  }
  // console.log(token)
  return (
    <div className='container custom-margin'>
      <div className="col-lg-4 mx-auto border rounded">
                <div className="col-lg-10 mx-auto p-3">
                    
                    {/* <div className="row">
                      <img src={logo} className='col-6 mx-auto' alt="" />
                    </div> */}
                    <h6 className="mt-2 mb-4 text-center"><span className='text-danger'>Dextereous</span> Learning</h6>
                    <h2 className="my-3 text-center">Login</h2>
                    <form onSubmit={FormHandler}>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" name="phone_number" pattern="[6-9]{1}[0-9]{9}" required className="form-control" autoComplete="on" onChange={inputHandler}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="password" name="password" className="form-control" autoComplete="off" onChange={inputHandler}/>
                        </div>
                        
                        {/* <div class=" form-check">
                          <input type="checkbox" class="form-check-input" onClick={togglePassword} />
                          <label className="form-check-label">Show Password</label>
                        </div> */}
            
                        <div className="form-group">
                            <input type="submit" className="btn btn-success form-control my-3" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Login
