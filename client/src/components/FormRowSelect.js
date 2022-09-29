

const FormRowSelect = () => {
  return (
    <div className='form-row'>
        <label htmlFor='jobType' className='form-label'>
        job type  
        </label>
        <select
            name='jobType'
            value={jobType}
            onChange={handleJobInput}
            className='form-select'
        >
        {jobTypeOptions.map((itemValue, index) => {
            return <option key={index} value={itemValue}>
            {itemValue}
            </option>
        })}
        </select>
    </div>
  )
}

export default FormRowSelect