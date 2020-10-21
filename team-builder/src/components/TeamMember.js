import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 5%;
    padding: 5%;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

function TeamMember(props){
    const {details, onEdit} = props;

    if(!details){
        return <h3>Loading team members...</h3>
    }

    return (
    <StyledCard>
        <div>
            <h2>Name: {details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
        <button onClick={onEdit} value={details.id}>Edit</button>
    </StyledCard>
    )
}

export default TeamMember;