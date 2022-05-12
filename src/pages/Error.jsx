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

export default function Error() {
    return (
        <StyledContainer>
            <StyledText>Cette page n'existe pas :/</StyledText>
        </StyledContainer>
    )
}
