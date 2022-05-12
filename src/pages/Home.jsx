import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import photo from '../assets/images/background.jpeg'

const StyledContainer = styled.section`
    display: flex;
    width: 100%;
    height: 700px;
`

const StyledTextName = styled.p`
    position: absolute;
    top: 45%;
    left: 11%;
    font-size: 4em;
    font-weight: bold;
    color: #020100;
`

const StyledTextJob = styled.p`
    position: absolute;
    top: 57%;
    left: 45%;
    font-size: 2em;
    color: #f46036;
`

const StyledTextFreelance = styled.p`
    position: absolute;
    top: 240px;
    left: 65%;
    transform: rotate(270deg);
    font-size: 3em;
    color: rgba(0, 0, 0, 0.7);
`

const StyledTextRemote = styled.p`
    position: absolute;
    top: 470px;
    left: 31%;
    transform: rotate(270deg);
    font-size: 3em;
    color: rgba(0, 0, 0, 0.5);
`

const StyledFirstSubContainer = styled.section`
    position: relative;
    width: 50%;
    height: 750px;
    background: rgba(235, 235, 235, 0.6);
`

const StyledSecondSubContainer = styled.section`
    position: relative;
    width: 50%;
    height: 750px;
    background: url(${photo});
    object-fit: cover;
`

const StyledLinkContact = styled(Link)`
    position: absolute;
    top: 17px;
    right: 5%;
    font-size: 1.5em;
    font-weight: bold;
    color: #f46036;
    text-decoration-color: #f1d302;
`

export default function Home() {
    return (
        <StyledContainer>
            <StyledFirstSubContainer>
                <div
                    style={{
                        position: 'absolute',
                        top: '100px',
                        left: '21%',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#F1D302',
                    }}
                ></div>
                <div
                    style={{
                        position: 'absolute',
                        top: '100px',
                        left: '13.5%',
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#235789',
                    }}
                ></div>
                <StyledTextName>YOANN L'HOSTIS</StyledTextName>
                <StyledTextJob>Développeur Front-End</StyledTextJob>
                <StyledTextFreelance>Freelance</StyledTextFreelance>
                <StyledTextRemote>Remote</StyledTextRemote>
            </StyledFirstSubContainer>
            <StyledSecondSubContainer>
                <StyledLinkContact to="/contact">Contact</StyledLinkContact>
            </StyledSecondSubContainer>
        </StyledContainer>
    )
}
