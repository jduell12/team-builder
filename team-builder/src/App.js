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
  const [member, memberToEdit] = useState({id:'', name: '', email: '', role:''});

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

    if(editingMember){
      teamMemberList.map(person => {
        if(person.id === member.id){
          const updateMember = {id: person.id, ...formValues}
          person = updateMember;
          changeList(teamMemberList => [updateMember, ...teamMemberList]);
          debugger
        }
      })
      memberToEdit({id:'', name: '', email: '', role:''});
    }else {
      const newMember = {id: uuid(), ...formValues}
      changeList(teamMemberList => [newMember, ...teamMemberList]);
    }

    editing(false);
    setFormValues(initialFormValues);
  }

  const onEdit = event => {
    teamMemberList.map(member => {
      if(member.id === event.currentTarget.value){
        memberToEdit(member);
      }
    })
    editing(true);
  }

  return(
    <StyledApp>
        <h1>Team Member List</h1>
        <Form err={err} values={formValues}  onInputChange={onInputChange} onSubmit={onSubmit} memberToEdit={member}/>
        {teamMemberList.map(member => {
          return (
            <TeamMember key={member.id} details={member} onEdit={onEdit} />
          )
        })}
    </StyledApp>
  )
}

export default App;
