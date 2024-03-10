import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {
    const {user} = useContext(UserContext)
      if(!user) return <p>Please Login</p>
    return <div>Welcome {user.username} </div>
}

export default Profile
