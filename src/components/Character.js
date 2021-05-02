import React from 'react';
import styled from 'styled-components';
export default function Character(props){
    const {attr, isUp, setActiveChar} = props;
    if(!attr){
        return<div>...Character...</div>;
    }
    return(
        <div>
            <CharContainer>
                <StyledH2><h2>{attr.name}</h2></StyledH2>
                <StyledP><p>{attr.birth_year}</p></StyledP>
                <StyledDiv onClick={()=>setActiveChar(attr.name)}>
                    <Arrow isUp={isUp}/>
                </StyledDiv>
            </CharContainer>
            {dropDown(isUp, [
                {key:'Height',value:attr['height']},
                {key:'Mass',value:attr['mass']},
                {key:'Hair Color',value:attr['hair_color']},
                {key:'Eye Color',value:attr['eye_color']},
                {key:'Gender',value:attr['gender']}
            ])}
        </div>
    );
}
const CharContainer = styled.div`
    border: yellow 1px solid;
    color:white;
    line-height:0.5px;
    margin-top:1%;
    margin-bottom:1%;
    padding:2%;
    display:flex;
    justify-content:space-between;
`;
const StyledH2 = styled.div`
    margin-left:0.5%;
    margin-right:0.5%;
`;
const StyledP = styled.div`
    border-radius:10px;
    background-color:#99939e;
    color:#534261;
    margin:0.5%;
    padding-left:0.5%;
    padding-right:0.5%;
`;
const Arrow = styled.div`
    border-width: 3px 3px 3px 3px;
    border-right:solid black;
    border-bottom:solid black;
    border-top:transparent;
    border-left:transparent;
    display: block;
    padding: 3px;
    ${(props)=>props.isUp? UpArrow:DownArrow}
`;
const UpArrow = `
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
`;
const DownArrow = `
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
`;
const StyledDiv = styled.div`
    display:flex;
    padding:15px;
`;
const dropDown = (isUp, attributes) =>{
    const StyledList = styled.ul`
        list-style:none;
    `;
    if(!isUp){
        return <div></div>;
    }
    else{
        return (
        <StyledList>
            { attributes.map((attr)=><li>{`${attr.key}: ${attr.value}`}</li>) }
        </StyledList>
        );
    }
}
