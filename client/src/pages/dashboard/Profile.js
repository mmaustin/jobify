import React, {useState} from 'react';
import { useAppContext } from '../../context/appContext';
import { FormRow, Alert } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const Profile = () => {
  const {user, showAlert, displayAlert, updateUser, isLoading} = 
  useAppContext();

  const [name, setName] = useState(user?.name);
  const [eamil, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('update user');
  }

  return (
    <h1>Profile Page</h1>
  )
}

export default Profile