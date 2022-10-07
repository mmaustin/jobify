import React from 'react'
import { useAppContext } from '../context/appContext';
import {FormRow, FormRowSelect} from '.';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters
  } = useAppContext()

  const handleSearch = (e) => {
    if(isLoading) return
    handleChange({name: e.target.name, value: e.target.value})
  }

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer;