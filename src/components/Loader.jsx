import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 700px;
    background: #fdfffc;
    animation: 1000ms test12;
    animation-fill-mode: both;
    @keyframes test12 {
        0% {
            opacity: 1;
        }
        99% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`

const StyledBigCircle = styled.div`
    width: 100px;
    height: 100px;
    border: 2px solid black;
    border-radius: 50%;
    border-top-color: #235789;
    border-right-color: #235789;
    border-bottom-color: #f1d302;
    border-left-color: #f46036;
    margin: auto;
    z-index: 1;
    animation: 1000ms test10;
    animation-fill-mode: both;
    @keyframes test10 {
        to {
            transform: rotate(0);
        }
        from {
            transform: rotate(360deg);
        }
    }
`

function Loader() {
    return (
        <StyledLoader>
            <StyledBigCircle></StyledBigCircle>
        </StyledLoader>
    )
}

export default Loader
