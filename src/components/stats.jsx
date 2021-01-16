
import React from 'react'
import styled from 'styled-components';
import {GiEarthAsiaOceania} from 'react-icons/gi';
import {MdAirplanemodeActive} from 'react-icons/md';
import {MdTimer} from 'react-icons/md';
import {FaMoneyCheck} from 'react-icons/fa';


const StatsData=[
    {
        icons: (<GiEarthAsiaOceania  />),
        title: "Travel Anywhere",
        description: "Travel with trusted partners and affordable rate"
    },
    {
        icons: (<MdAirplanemodeActive />),
        title: "Travel Anywhere",
        description: "Travel with trusted partners and affordable rate"
    },
    {
        icons: (<MdTimer />),
        title: "Travel Anywhere",
        description: "Travel with trusted partners and affordable rate"
    },
    {
        icons: (<FaMoneyCheck css={`
        color: #fafao2;
        `} />),
        title: "Travel Anywhere",
        description: "Travel with trusted partners and affordable rate"
    },
    
]



const Stats= () =>{
    return(
        <StatsContainer>
            <Heading>Why Us?</Heading>
            <Wrapper>
               {
                   StatsData.map((item, index) =>{
                       return(
                           <StatsBox key={index}>
                               <Icon>{item.icons}</Icon>
                               <Title>{item.title}</Title>
                               <Description>{item.description}</Description>
                           </StatsBox>
                       )
                   })
               } 
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats;

const StatsContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px)/2);
`

const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 5rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }

`
const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`
const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`
const Title = styled.div`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
`
const Description = styled.div`
    
`