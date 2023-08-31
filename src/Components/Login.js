import React from 'react'
// import logo from '../Images/studentlogo.png'

const Login = () => {
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
                            <label htmlFor="">Email</label>
                            <input type="email" name="name" required className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="name" required className="form-control" />
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
