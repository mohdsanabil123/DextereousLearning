import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'

const Profile = () => {
  const { token } = useContext(AuthContext)
  return (
    <div>
      <h1>{token}</h1>
    </div>
  )
}

export default Profile
