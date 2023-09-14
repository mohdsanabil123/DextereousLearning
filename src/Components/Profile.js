import React, { useEffect, useState } from 'react'
import profile from '../Images/profile.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {

  const [ user, setUser ] = useState({});               // Now using useState() and later we will use context api.

  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserProfile();
    } else {
      navigate('/login')
    }
  }, [])
  
  const getUserProfile = async () => {
    // const token = localStorage.getItem('token')
    try {
      const user = await axios.get("http://127.0.0.1:8000/api/profile/", {
        headers:{
          "Content-Type": "text/json",
          "Authorization": localStorage.getItem('token')
      }
    })
    setUser(user.data);

    } catch (error) {
      console.log("Somethong is wrong!")
    }
  }

  return (
      <div>
        <div className="container py-4">
          <div className="row">
            <div className="col">
              <div aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <h2 className='text-primary'>Your Profile</h2>
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src={profile} alt="avatar"
                    className="rounded-circle img-fluid" style={{ width: "150px" }} />
                  <h5 className="my-3">{`${user.first_name} ${user.last_name}`}</h5>
                  <p className="text-muted mb-1">{`Class ${user.std}, ${user.school_name ? user.school_name : ''}`}</p>
                  <p className="text-muted mb-4">{`${user.address ? user.address : ''}`}</p>
                </div>
              </div>

            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${user.first_name} ${user.last_name ? user.last_name : ''}`}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${user.email}`}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`+91 ${user.phone_number}`}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Class</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${user.std}`}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">School</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${user.school_name ? user.school_name : ''}`}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{`${user.address ? user.address : ''}`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profile
