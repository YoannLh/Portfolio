import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.p`
    position: relative;
    left: 48%;
    top: 35%;
    height: 25px;
    font-size: 4em;
    font-weight: bold;
    color: #235789;
    animation: 1000ms test10;
    animation-fill-mode: both;
    @keyframes test10 {
        0% {
            opacity: 1;
        }
        50% {
            color: red;
        }
        99% {
            opacity: 1;
            color: yellow;
        }
        100% {
            opacity: 0;
        }
    }
`

function Loader() {
    return <StyledLoader>@</StyledLoader>
}

export default Loader
