import React, {useState, useEffect} from 'react';
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

const initialFormValues = 
  {
    name: '',
    email: '',
    role: '',
  }

function App() {
  const [teamMemberList, changeList] = useState(initialTeamMemberList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [err, setErr] = useState('');
  const [editingMember, editing] = useState(false);

  const onInputChange = event => {
    const {name, value} = event.target

    setFormValues({
      ...formValues, [name]:value,
    })
  }

  const onSubmit = event => {
    event.preventDefault()

    if(!formValues.name || !formValues.email || !formValues.role){
      setErr('You need to fill out all the information')
      return
    }
    setErr('')
    editing(false);

    const newMember = {id: uuid(), ...formValues}

    changeList(teamMemberList => [newMember, ...teamMemberList]);

    setFormValues(initialFormValues);
  }

  const onEdit = event => {
    console.log(event.currentTarget.value);
    editing(true);
  }

  return(
    <StyledApp>
        <h1>Team Member List</h1>
        <Form err={err} values={formValues}  onInputChange={onInputChange} onSubmit={onSubmit} edit={editingMember}/>
        {teamMemberList.map(member => {
          return (
            <TeamMember key={member.id} details={member} onEdit={onEdit} />
          )
        })}
    </StyledApp>
  )
}

export default App;
