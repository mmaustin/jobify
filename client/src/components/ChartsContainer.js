import React, {useState} from 'react';
import AreaChart from './AreaChart';
import BarsChart from './BarsChart';
import {useAppContext} from '../context/appContext';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const {monthlyApplications: data} = useAppContext();
  
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={()=> setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart? <BarsChart data={data}/> : <AreaChart data={data}/>}
    </Wrapper>
  )
}

export default ChartsContainer