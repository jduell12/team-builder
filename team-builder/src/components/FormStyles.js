import React, {useState} from 'react';
import styled from 'styled-components';

export const StyledForm = styled.form`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 5%;
    padding: 5%;
    background-color: aliceblue;
`;

export const StyledInnerForm = styled.div`
    padding: 0 3% 0 3%;
    display:flex;
    flex-direction: column;
    align-items: center;
    
`;