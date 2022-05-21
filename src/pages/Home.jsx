import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import photo from '../assets/images/background.jpeg'
import arrow from '../assets/images/arrow-down.svg'
import moon from '../assets/images/moon.svg'
import sun from '../assets/images/sun.svg'

import Loader from '../components/Loader'
import Bio from '../sections/Bio'
import Technos from '../sections/Technos'
import { ThemeContext } from '../context/Context'

const StyledMainContainer = styled.main`
    display: flex;
    flex-direction: column;
`

const StyledHeroContainer = styled.section`
    display: flex;
    width: 100%;
    height: 750px;
`

const StyledFirstSubContainer = styled.section`
    position: relative;
    width: 50%;
`

const StyledContainerLogo = styled.div`
    position: absolute;
    top: 30px;
    left: 8%;
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
            transform: translate(80px);
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
    animation: 250ms 2000ms test20;
    animation-fill-mode: both;
    @keyframes test20 {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
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
    font-size: 1.8em;
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

const StyledLinkSecondPart = styled.div`
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

const StyledLinkArrowDown = styled.a`
    height: 55px;
    transform: rotate(90deg);
    color: white !important;
    margin: auto;
`

export default function Home() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    function handleChangeTheme() {
        toggleTheme()
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    }
    return (
        <StyledMainContainer>
            <div id="up"></div>
            <StyledHeroContainer
                style={{
                    background: theme === 'light' ? '#fdfffc' : '#020100',
                }}
            >
                <Loader />
                <StyledFirstSubContainer>
                    <StyledContainerLogo id="logo">
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
                    <StyledTextName
                        style={{
                            color: theme === 'light' ? '#020100' : '#fdfffc',
                        }}
                    >
                        YOANN L'HOSTIS
                    </StyledTextName>
                    <StyledTextJob>
                        Développeur d'Application
                        <br />
                        Javascript React
                    </StyledTextJob>
                    <StyledTextFreelance
                        style={{
                            color:
                                theme === 'light'
                                    ? 'rgba(0, 0, 0, 0.7)'
                                    : '#fdfffc',
                        }}
                    >
                        Freelance
                    </StyledTextFreelance>
                    <StyledTextRemote
                        style={{
                            color:
                                theme === 'light'
                                    ? 'rgba(0, 0, 0, 0.45)'
                                    : '#fdfffc',
                        }}
                    >
                        Remote
                    </StyledTextRemote>
                </StyledFirstSubContainer>
                <StyledSecondSubContainer>
                    <div
                        style={{
                            position: 'absolute',
                            top: '30px',
                            left: '-8%',
                            display: 'flex',
                            width: '15%',
                            height: '20px',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            color: theme === 'light' ? '#020100' : '#fdfffc',
                        }}
                    >
                        <img
                            style={{
                                height: '20px',
                                fill: theme === 'light' ? '#020100' : '#fdfffc',
                            }}
                            src={theme === 'light' ? moon : sun}
                            alt="moon icon"
                            onClick={() => handleChangeTheme()}
                        />
                        <p>EN</p>
                        <p>FR</p>
                    </div>
                    <StyledLinkContact to="/contact">contact</StyledLinkContact>
                    <StyledLinkSecondPart>
                        <StyledLinkArrowDown href="/#bio">
                            <img
                                style={{ height: '60px' }}
                                src={arrow}
                                alt="arrow down"
                            />
                        </StyledLinkArrowDown>
                    </StyledLinkSecondPart>
                </StyledSecondSubContainer>
            </StyledHeroContainer>
            <Bio />
            <Technos />
        </StyledMainContainer>
    )
}
