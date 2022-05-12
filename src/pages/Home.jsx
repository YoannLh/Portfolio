import React, { useEffect } from 'react'
import styled from 'styled-components'

import photo from '../assets/images/background.jpeg'

const StyledContainer = styled.section`
    display: flex;
    width: 100%;
    height: 700px;
`

const StyledTextName = styled.p`
    position: absolute;
    top: 45%;
    left: 3%;
    font-size: 4em;
    font-weight: bold;
`

const StyledTextJob = styled.p`
    position: absolute;
    top: 56.5%;
    left: 22%;
    font-size: 2em;
`

const StyledTextFreelance = styled.p`
    position: absolute;
    top: 220px;
    left: 30%;
    transform: rotate(270deg);
    font-size: 3em;
`

const StyledTextRemote = styled.p`
    position: absolute;
    top: 455px;
    left: 15%;
    transform: rotate(270deg);
    font-size: 3em;
`

const StyledFirstSubContainer = styled.section`
    width: 50%;
    height: 750px;
    background: rgba(235, 235, 235, 0.6);
`

const StyledSecondSubContainer = styled.section`
    width: 50%;
    height: 750px;
    background: url(${photo});
    object-fit: cover;
`

export default function Home() {
    return (
        <StyledContainer>
            <StyledFirstSubContainer>
                <StyledTextName>YOANN L'HOSTIS</StyledTextName>
                <StyledTextJob>Développeur Front-End</StyledTextJob>
                <StyledTextFreelance>Freelance</StyledTextFreelance>
                <StyledTextRemote>Remote</StyledTextRemote>
            </StyledFirstSubContainer>
            <StyledSecondSubContainer></StyledSecondSubContainer>
        </StyledContainer>
    )
}
