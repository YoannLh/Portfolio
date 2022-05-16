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
    return (
        <StyledMain>
            <StyledFirstSubContainer>
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
