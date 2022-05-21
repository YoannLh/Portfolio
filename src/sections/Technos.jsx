import React, { useContext } from 'react'
import styled from 'styled-components'

import arrow from '../assets/images/arrow-down.svg'
import { ThemeContext } from '../context/Context'

const StyledMain = styled.section`
    display: flex;
    height: 750px;
    background: #fdfffc;
`

const StyledFirstSubContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
`

const StyledSecondSubContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    background: #f46036;
`

const StyledLinkSecondPart = styled.div`
    position: absolute;
    left: -35px;
    bottom: 55px;
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #f1d302;
`

const StyledLinkArrowUp = styled.a`
    height: 55px;
    transform: rotate(180deg);
    color: white !important;
    margin: auto;
`

export default function Projects() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    return (
        <StyledMain>
            <StyledFirstSubContainer
                style={{
                    background: theme === 'light' ? '#fdfffc' : '#020100',
                }}
            >
                {/* <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#F1D302',
                    }}
                ></div> */}
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#020100',
                    }}
                ></div>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#235789',
                    }}
                ></div>
            </StyledFirstSubContainer>
            <StyledSecondSubContainer>
                <h2
                    style={{
                        margin: '30px auto 20px auto',
                        color: 'white',
                        fontSize: '1.3em',
                        textDecoration: 'underline',
                        textDecorationColor: '#f1d302',
                    }}
                >
                    Je maitrise quelles technos ?
                </h2>
                <p
                    style={{
                        width: '75%',
                        margin: '30px auto',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    Je travaille principalement avec Javascript. Pourquoi ?
                    Parce que c'est le langage du Web tout simplement. De nos
                    jous, on crée des serveurs, des applications Web et mobile
                    avec Javascript et ses librairies. Qui dit mieux ?
                </p>
                <h2
                    style={{
                        margin: '30px auto 20px auto',
                        color: 'white',
                        fontSize: '1.3em',
                        textDecoration: 'underline',
                        textDecorationColor: '#f1d302',
                    }}
                >
                    Outils ?
                </h2>
                <p
                    style={{
                        width: '75%',
                        margin: '30px auto',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    Ils sont nombreux ! Trello, Figma, Postman, VSC, Git, Git
                    Kraken, Github... Ces outils servent à améliorer la
                    productuvité et le rendement
                </p>
                <h2
                    style={{
                        margin: '30px auto 20px auto',
                        color: 'white',
                        fontSize: '1.3em',
                        textDecoration: 'underline',
                        textDecorationColor: '#f1d302',
                    }}
                >
                    Méthodologies ?
                </h2>
                <p
                    style={{
                        width: '75%',
                        margin: '30px auto',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    Agilité, TDD, BDD, DDD... Je vous encourage à lire le
                    lexique pour en apprendre plus ;)
                </p>
                <StyledLinkSecondPart>
                    <StyledLinkArrowUp href="/#up">
                        <img
                            style={{ height: '60px' }}
                            src={arrow}
                            alt="arrow up"
                        />
                    </StyledLinkArrowUp>
                </StyledLinkSecondPart>
            </StyledSecondSubContainer>
            <div id="down"></div>
        </StyledMain>
    )
}
