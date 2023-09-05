import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
// import Loader from './Loader'
// import { useNavigate } from 'react-router-dom'

const Login = () => {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const [login, setLogin] = useState(false)
  
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value
    })
  }
  // console.log(credential)

  async function formHandler(e) {
    e.preventDefault()
    // Validation
    if (credential.email === '') {
        Swal.fire({
            title: 'Validation error!',
            text: 'Please enter your email',
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
      const res =  await axios.post("http://127.0.0.1:8000/api/login/", credential);
      console.log(res.data)

        // if ( ! response.login ) {
        //   Swal.fire({
        //     title: 'Invalid Credentials!',
        //     text: 'Please provide proper credentials',
        //     icon: 'error',
        // })
        // }
        // else { Swal.fire({
        //   title: 'Login Success!',
        //   text: 'Please provide proper credentials',
        //   icon: 'success',
        // })

        // navigate("/dashboard");
        // }
    }
 }

//  const postData = async () => {
//   const res = axios.post("http://127.0.0.1:8000/api/login/", credential)
//     setResponse(res.data);
//     console.log(response)
//  }
 

  return (
    <div className='container custom-margin'>
      <div className="col-lg-4 mx-auto border rounded">
                <div className="col-lg-10 mx-auto p-3">
                    
                    {/* <div className="row">
                      <img src={logo} className='col-6 mx-auto' alt="" />
                    </div> */}
                    <h6 className="mt-2 mb-4 text-center"><span className='text-danger'>Dextereous</span> Learning</h6>
                    <h2 className="my-3 text-center">Login</h2>
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" autoComplete="on" onChange={inputHandler}/>
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
                            <input type="submit" onClick={formHandler} className="btn btn-success form-control my-3" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Login
