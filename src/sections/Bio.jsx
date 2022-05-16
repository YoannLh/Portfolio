import React from 'react'
import styled from 'styled-components'

import arrow from '../assets/images/arrow-down.svg'

const StyledMain = styled.section`
    display: flex;
    height: 750px;
    background: #fdfffc;
`

const StyledFirstSubContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    background: #235789;
`

const StyledSecondSubContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
`

const StyledLinkSecondPart = styled.div`
    position: absolute;
    left: -35px;
    bottom: 55px;
    display: flex;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #f46036;
`

const StyledLinkArrowDown = styled.a`
    height: 55px;
    color: white !important;
    margin: auto;
`

export default function Bio() {
    return (
        <StyledMain>
            <StyledFirstSubContainer>
                <h2
                    style={{
                        margin: 'auto',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    Je suis ?
                </h2>
                <p
                    style={{
                        width: '75%',
                        margin: 'auto',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    Je suis un développeur web, plutôt orienté front-end. Avant,
                    j'étais régisseur lumière dans le spectacle. Concrètement,
                    je peux recoder facebook (je ne vous cache pas que ça va
                    prendre un peu de temps), mais je suis plutôt orienté
                    "visuel", UI / UX, algorithmique... #pointilleux
                </p>
                <h2
                    style={{
                        margin: 'auto',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    J'ai déjà fait quoi ?
                </h2>
                <p
                    style={{
                        width: '75%',
                        margin: 'auto',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    J'ai travaillé pour des vendeurs de mobiliers, des
                    restaurants, des professionels de la santé, des négociants
                    en vins sur Bordeaux...
                </p>
                <h2
                    style={{
                        margin: 'auto',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    Vous avez un projet web ?
                </h2>
                <p
                    style={{
                        width: '75%',
                        margin: 'auto',
                        color: 'white',
                        fontSize: '1.3em',
                    }}
                >
                    Contactez-moi :) On va analyser ensemble si mes compétences
                    matchent avec votre projet.
                </p>
            </StyledFirstSubContainer>
            <StyledSecondSubContainer>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#F1D302',
                    }}
                ></div>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#020100',
                    }}
                ></div>
                {/* <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#F46036',
                    }}
                ></div> */}
                <StyledLinkSecondPart>
                    <StyledLinkArrowDown href="/#down">
                        <img
                            style={{ height: '60px' }}
                            src={arrow}
                            alt="arrow down"
                        />
                    </StyledLinkArrowDown>
                </StyledLinkSecondPart>
            </StyledSecondSubContainer>
            <div id="bio"></div>
        </StyledMain>
    )
}
