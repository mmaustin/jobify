import React from 'react';
import Landing from './pages/Landing';
import styled from 'styled-components';

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`

const App = () => {
  return (
    <div>
      <Button>Click Me</Button>
      <h1>jobify</h1>
      <Landing />
    </div>
  );
}

export default App;
