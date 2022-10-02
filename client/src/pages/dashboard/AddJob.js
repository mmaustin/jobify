import { useAppContext } from '../../context/appContext';
import { FormRow, Alert, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';


const AddJob = () => {

  const {isEditing, showAlert, displayAlert, position, company, jobLocation, createJob,
  jobType, jobTypeOptions, status, statusOptions, handleChange, clearValues, isLoading, editJob} = useAppContext();

  const handleSubmit = e => {
    e.preventDefault()
    if(!company || !position || !jobLocation){
      displayAlert();
      return
    }
    if(isEditing){
      editJob();
      return
    }
    createJob();
  }

  const handleJobInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({name, value});
  }

  return (
    <Wrapper>
      <form className='form' >
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
          {/* job status */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            name='jobType'
            labelText='Job Type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* button container */}
          <div className='btn-container'>
            <button 
              type='submit'
              className='btn  btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
              >
              submit
            </button>
            <button className='btn btn-block clear-btn'
              onClick={(e)=> {
                e.preventDefault()
                clearValues()
                }}>
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob;