import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {StyledForm, StyledInnerForm} from './FormStyles'
import TeamMember from './TeamMember';

function Form(props){
    const {err, values, onInputChange, onSubmit, memberToEdit} = props

    useEffect(() => {
        console.log(values);
        console.log(memberToEdit);
        values.name = memberToEdit.name;
        values.email = memberToEdit.email;
        values.role = memberToEdit.role;
    }, [memberToEdit])

    return (
        <StyledForm className="styled-form" onSubmit={onSubmit}>
            <StyledInnerForm className="inner-form">
                <span style={{color: 'red'}}>{err}</span>
                <h2>Add a Team Member</h2>
                <label htmlFor='nameInput'>
                    Name:&nbsp;&nbsp;
                    <input 
                        id='nameInput'
                        type='text'
                        name='name'
                        placeholder={memberToEdit.name}
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>
                <label htmlFor='emailInput'>
                    Email:&nbsp;&nbsp;
                    <input 
                        id='emailInput'
                        type='email'
                        name='email'
                        placeholder={memberToEdit.email}
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>
                <label>
                    Role:&nbsp;&nbsp;
                    <select name='role' value={values.role} onChange={onInputChange}>
                        <option value=''>-- Choose a Role --</option>
                        <option value='Full Stack Developer'>Full Stack Developer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='iOS Developer'>iOS Developer</option>
                    </select>
                </label>
                <button>Submit</button>
            </StyledInnerForm>
        </StyledForm>
    )
}

export default Form;