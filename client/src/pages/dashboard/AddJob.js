import { useAppContext } from '../../context/appContext';
import { FormRow, Alert } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';


const AddJob = () => {

  const {isEditing, showAlert, displayAlert, position, company, jobLocation,
  jobType, jobTypeOptions, status, statusOptions} = useAppContext();

  const handleJobInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert/>}
        <div className='form-center'>
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText='Job Location'
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob;