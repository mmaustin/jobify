import { useAppContext } from '../../context/appContext';
import { FormRow, Alert } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';


const AddJob = () => {

  const {isEditing, showAlert, displayAlert, position, company, jobLocation,
  jobType, jobTypeOptions, status, statusOptions} = useAppContext();

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert}
      </form>
    </Wrapper>
  )
}

export default AddJob;