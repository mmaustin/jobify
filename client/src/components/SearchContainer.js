import React from 'react'
import { useAppContext } from '../context/appContext';
import {FormRow, FormRowSelect} from '../components';
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
  
  return (
    <h1>Search Component</h1>
  )
}

export default SearchContainer;