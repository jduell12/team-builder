import React from 'react';
import styled from 'styled-components';

const StyledMember = styled.div`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 5%;
    padding: 5%;
    background-color: aliceblue;
`;

function TeamMember(props){
    const {details} = props;

    if(!details){
        return <h3>Loading team members...</h3>
    }

    return (
        <StyledMember>
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </StyledMember>
    )
}

export default TeamMember;