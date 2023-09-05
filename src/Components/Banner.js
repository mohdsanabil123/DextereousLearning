import React, { useContext } from 'react'
import banner from '../Images/banner.jpg'
// import AuthContext from '../store/authContext'
const Banner = () => {
//  const authCtx =  useContext(AuthContext);

  return (
    <>
      <div className="container custom-margin">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 mb-4">Welcome To Dextereous Learning</h1>
            <p className="lead mb-4">Dextereous Learning is a learning platform where you can learn new things daily. learning system based on formalised teaching but with the help of electronic resources. Be educated so that you can change the world.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-outline-success btn-lg px-4 me-md-2 fw-bold">Primary</button>
              <button type="button" className="btn btn-danger btn-lg px-4">Default</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={banner} alt="" width="720" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Banner
