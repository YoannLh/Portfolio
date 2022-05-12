import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
    display: flex;
    width: 100%;
    height: 700px;
`

const StyledText = styled.p`
    margin: auto;
`

export default function Home() {
    return (
        <StyledContainer>
            <StyledText>Home</StyledText>
        </StyledContainer>
    )
}
