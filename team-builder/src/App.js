import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import styled from 'styled-components';
import Form from './components/Form';
import TeamMember from './components/TeamMember';

const StyledApp = styled.div`
  text-align:center;
`;

const initialTeamMemberList = [
  {
    id: uuid(),
    name: 'Jessica',
    email: 'something@gmail.com',
    role: 'Full Stack Developer',
  },
]

const initialFormValues = [
  {
    name: '',
    email: '',
    role: '',
  }
]

function App() {
  const [teamMemberList, changeList] = useState(initialTeamMemberList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = event => {

  }

  const onSubmit = event => {

  }

  return(
    <StyledApp>
        <h1>Team Member List</h1>
        <Form values={formValues}  onInputChange={onInputChange} onSubmit={onSubmit} />
        {teamMemberList.map(member => {
          return (
            <TeamMember key={member.id} details={member} />
          )
        })}
    </StyledApp>
  )
}

export default App;
