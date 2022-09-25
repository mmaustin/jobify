import React from 'react'
import { useAppContext } from '../../context/appContext'

const Profile = () => {
  const {user} = useAppContext();

  return (
    <h1>Profile Page</h1>
  )
}

export default Profile