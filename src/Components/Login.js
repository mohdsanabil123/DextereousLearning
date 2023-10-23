import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
// import { AuthContext } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
// import Loader from './Placeholders/Loader';

const Login = () => {
  
  const navigate = useNavigate();
  const [ loading, setLoading ] = useState(false);
  const [ passLabel, setPassLabel ] = useState('Show Password')

  const showLoader = () => {
    Swal.fire({
      title: 'Login into your Account',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  }

  const togglePassword = () => {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
      setPassLabel('Hide Password')
    } else {
      x.type = "password";
      setPassLabel('Show Password')
    }
  }

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
        setLoading(true);
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/token-auth/`, {
          "username": credential.phone_number,
          "password": credential.password
        })
        setLoading(false);
        Swal.close();
        const token = await (res.data.token)
        localStorage.setItem('token', token)      
        toast.success('Successfully Logged In!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        navigate('/DextereousLearning')
      }
      catch (error) {
        setLoading(false);
        Swal.close();
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
      { loading && showLoader() }
      <div className="col-lg-4 mx-auto border rounded">
        <div className="col-lg-10 mx-auto p-3">

              <h6 className="mt-2 mb-4 text-center"><span className='text-danger'>Dextereous</span> Learning</h6><h2 className="my-3 text-center">Login</h2><form onSubmit={FormHandler}>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone_number" pattern="[6-9]{1}[0-9]{9}" required className="form-control" autoComplete="off" onChange={inputHandler} />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input type="password" id="password" name="password" className="form-control" autoComplete="off" onChange={inputHandler} />
                </div>

                <div className=" form-check">
                  <input type="checkbox" className="form-check-input" onClick={togglePassword} />
                  <label className="form-check-label">{passLabel}</label>
                </div>

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
