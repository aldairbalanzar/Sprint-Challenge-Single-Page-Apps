import React from "react";
import styled from 'styled-components';

const Card = styled.div `
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 30%;
        height: auto;
        margin: 8% 0;
    `;    

    const CardName = styled.h1 `
        width: 100%;
        background-color: rgba(220, 110, 150, .6);
        border-radius: 6px;
        padding: 2% 0;
    `;

    // const CardImg = styled.img `
    //     border-radius: 20px;
    //     width: 80%;
    //     height: auto;
    // `;

export default function CharacterCard({character}) {
return(
    <Card>
      <CardName>{character.name}</CardName>
    </Card>
) 
}
