import React, { useContext } from 'react'
import styled from 'styled-components'

import { ThemeContext } from '../context/Context'

const StyledMainCointainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 750px;
    align-items: center;
`

function Contact() {
    const { theme } = useContext(ThemeContext)
    return (
        <StyledMainCointainer
            style={{
                background: theme === 'light' ? '#fdfffc' : '#020100',
                color: 'white',
            }}
        >
            <p>Premier contact par mail uniquement</p>
            <p>Je vous propose d'articuler votre mail sur 3 points :</p>

            <p>Confiance dans la solution et confiance dans le vendeur !</p>
            <p>CA sert à rien de chercher à plaire à tout le monde</p>
            <p>Attention au formulaire qui donne pas envies de répondre</p>

            <p>Ajout d' un lexique du développeur ?</p>
        </StyledMainCointainer>
    )
}

export default Contact
