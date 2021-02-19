import React from 'react';
import styled from 'styled-components'
import './CompFonts.css'

const StyledDiv = styled.div`
    color:darkgreen;
    display:block;
    text-align: left;
    width: 55%;
    margin-left:20%;
    display:flex;
    flex-wrap:wrap;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    border:3px solid darkgreen;
    padding:0px 20px;
    background-color:black;
    font-family: 'Righteous', cursive;
    font-family: 'Poller One', cursive;
    font-family: 'DotGothic16', sans-serif;
    
`
const StyledH1 = styled.h1`
    display:inline;
`
const StyledBD = styled.h2`
    display:inline;
    color:darkgreen;
    font-family: 'Righteous', cursive;
    font-family: 'Poller One', cursive;
    font-family: 'DotGothic16', sans-serif;
`
const StyEyeColor = styled.p`
    font-family: 'Righteous', cursive;
    font-family: 'Poller One', cursive;
    font-family: 'DotGothic16', sans-serif;
    color:darkgreen;
    margin-top: -6px;
    `
const StyHairColor = styled.p`
font-family: 'Righteous', cursive;
    font-family: 'Poller One', cursive;
    font-family: 'DotGothic16', sans-serif;
    color:darkgreen;
    margin-top: -6px;
    `

const StyHeight = styled.p`
font-family: 'Righteous', cursive;
    font-family: 'Poller One', cursive;
    font-family: 'DotGothic16', sans-serif;
    color:darkgreen;
    margin-top: -6px;
    `

const StyMass = styled.p`
font-family: 'Righteous', cursive;
    font-family: 'Poller One', cursive;
    font-family: 'DotGothic16', sans-serif;
    color:darkgreen;
    margin-top: -6px;
    `
const StyGender = styled.p`
font-family: 'Righteous', cursive;
    font-family: 'Poller One', cursive;
    font-family: 'DotGothic16', sans-serif;
    color:darkgreen;
    
`
const Character = props => {
    const { data } = props;
    console.log(data)

 

  return (
    <StyledDiv>
        <StyledH1>{data.name}</StyledH1>
        <StyledBD>DOB: {data.birth_year}</StyledBD> 
        <StyGender>GENDER: {data.gender}</StyGender>
        <StyEyeColor>EYE_COLOR: {data.eye_color}</StyEyeColor>
        <StyHairColor>HAIR_COLOR: {data.hair_color}</StyHairColor>
        <StyHeight>HEIGHT: {data.height}</StyHeight>
        <StyMass>MASS: {data.mass}</StyMass>
    </StyledDiv>
  );
}
export default Character; 
