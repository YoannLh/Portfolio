import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Loader from '../components/Loader'
import photo from '../assets/images/background.jpeg'
import arrow from '../assets/images/arrow-down.svg'

const StyledContainer = styled.section`
    display: flex;
    width: 100%;
    height: 700px;
    background: #fdfffc;
`

const StyledFirstSubContainer = styled.section`
    position: relative;
    width: 50%;
    height: 750px;
`

const StyledContainerLogo = styled.div`
    position: absolute;
    top: 30px;
    left: 12%;
    width: 100px;
`

const StyledPocketDisk = styled.div`
    display: flex;
    position: absolute;
    width: 100px;
    height: 100px;
    background: #235789;
    animation: 250ms 1750ms test7;
    animation-fill-mode: both;
    @keyframes test7 {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const StyledContainerDisk = styled.div`
    animation: 250ms 2000ms test6;
    animation-fill-mode: both;
    @keyframes test6 {
        from {
            opacity: 0;
            transform: translate(0);
        }
        to {
            opacity: 1;
            transform: translate(75px);
        }
    }
`

const StyledDisk = styled.div`
    display: flex;
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f1d302;
`

const StyledTextName = styled.p`
    position: absolute;
    top: 45%;
    left: 11%;
    font-size: 4em;
    font-weight: bold;
    color: #020100;
    animation: 250ms 1000ms test;
    animation-fill-mode: both;
    @keyframes test {
        from {
            opacity: 0;
            transform: translate(-100px);
        }
        to {
            opacity: 1;
            transform: translate(0);
        }
    }
`

const StyledTextJob = styled.p`
    position: absolute;
    top: 57%;
    left: 45%;
    font-size: 2em;
    color: #f46036;
    animation: 250ms 1250ms test2;
    animation-fill-mode: both;
    @keyframes test2 {
        from {
            opacity: 0;
            transform: translate(100px);
        }
        to {
            opacity: 1;
            transform: translate(0);
        }
    }
`

const StyledTextFreelance = styled.p`
    position: absolute;
    top: 240px;
    left: 65%;
    transform: rotate(270deg);
    font-size: 3em;
    color: rgba(0, 0, 0, 0.7);
    animation: 250ms 1500ms test3;
    animation-fill-mode: both;
    @keyframes test3 {
        from {
            opacity: 0;
            transform: translateY(-100px) rotate(270deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotate(270deg);
    }
`

const StyledTextRemote = styled.p`
    position: absolute;
    top: 470px;
    left: 31%;
    transform: rotate(270deg);
    font-size: 3em;
    color: rgba(0, 0, 0, 0.45);
    animation: 250ms 1500ms test4;
    animation-fill-mode: both;
    @keyframes test4 {
        from {
            opacity: 0;
            transform: translateY(100px) rotate(270deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotate(270deg);
        }
    }
`

const StyledSecondSubContainer = styled.section`
    position: relative;
    width: 50%;
    height: 750px;
    background: url(${photo}) no-repeat;
    object-fit: cover;
    animation: 250ms 1000ms test5;
    animation-fill-mode: both;
    @keyframes test5 {
        from {
            opacity: 0;
            transform: translate(100px);
        }
        to {
            opacity: 1;
            transform: translate(0);
        }
    }
`

const StyledLinkContact = styled(Link)`
    position: absolute;
    top: 20px;
    right: 4%;
    font-size: 1.7em;
    font-weight: bold;
    color: #f46036;
    text-decoration-color: #f1d302;
    animation: 250ms 2000ms test7;
    animation-fill-mode: both;
    @keyframes test7 {
        from {
            opacity: 0;
            transform: translate(-200px);
        }
        to {
            opacity: 1;
            transform: translate(0);
        }
    }
`

const StyledLinkSecondPart = styled.section`
    position: absolute;
    left: -35px;
    bottom: 55px;
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #235789;
    animation: 250ms 1500ms test3;
    animation-fill-mode: both;
    @keyframes test3 {
        from {
            opacity: 0;
            transform: translateY(-100px) rotate(270deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotate(270deg);
    }
`

const StyledArrowDown = styled.img`
    height: 55px;
    transform: rotate(90deg);
    color: white !important;
    margin: auto;
`

export default function Home() {
    return (
        <StyledContainer>
            <Loader />
            <StyledFirstSubContainer>
                <StyledContainerLogo>
                    <StyledContainerDisk>
                        <StyledDisk>
                            <p
                                style={{
                                    position: 'relative',
                                    top: '-3px',
                                    margin: 'auto',
                                    color: 'white',
                                    fontSize: '2.3em',
                                    fontWeight: 'bold',
                                    transform: 'rotate(-20deg)',
                                }}
                            >
                                @
                            </p>
                        </StyledDisk>
                    </StyledContainerDisk>
                    <StyledPocketDisk />
                </StyledContainerLogo>
                <StyledTextName>YOANN L'HOSTIS</StyledTextName>
                <StyledTextJob>Développeur Front-End</StyledTextJob>
                <StyledTextFreelance>Freelance</StyledTextFreelance>
                <StyledTextRemote>Remote</StyledTextRemote>
            </StyledFirstSubContainer>
            <StyledSecondSubContainer>
                <StyledLinkContact to="/contact">contact</StyledLinkContact>
                <StyledLinkSecondPart>
                    <StyledArrowDown src={arrow} alt="arrow down" />
                </StyledLinkSecondPart>
            </StyledSecondSubContainer>
        </StyledContainer>
    )
}
