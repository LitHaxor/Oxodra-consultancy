import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import { Button } from './Button';
import {ImLocation} from 'react-icons/im'

const Trips = () =>{

    const data = useStaticQuery(graphql`
        query MyQuery {
            allTripsJson {
                edges {
                node {
                    alt
                    button
                    name
                    img {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    }
                }
                }
            }
            }
    `);

     const getTrips = (data) =>{
         const tripsArray = [];

         data.allTripsJson.edges.forEach((item, index) =>{
            tripsArray.push(
                <ProductCard key={index}>
                    <ProductImg src={item.node.img.childImageSharp.fluid.src} alt={item.node.alt} fluid={item.node.img.childImageSharp.fluid} />
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation/>
                            <ProductTitle>{item.node.name}</ProductTitle>
                        </TextWrap>
                        <ProductButton to="/trips" primary="true" round="true">{item.node.button}</ProductButton>
                    </ProductInfo>
                </ProductCard>
            )
         })
         return tripsArray;
     }

    return(
        <ProductsContainer>
            <ProductsHeading>
              Our Best Packages
            </ProductsHeading>
            <ProductWrapper>
               {getTrips(data)}
            </ProductWrapper>
            <ShowMore>
                <Button to="/trips" primary="true" round="true" big="true">Show More packages</Button>
            </ShowMore>
        </ProductsContainer>
    )
}

export default Trips;


const ProductsContainer = styled.div`
    min-height:  100vh;
    padding: 5rem calc((100vw - 1330px)/2);
    color: #fff;
`
const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`
const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and ( max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and ( max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`

const ProductImg = styled(Img)`
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(60%);
    transition: 0.4s cubic-bezier(0.075, 0.02,0.165,1);

    &:hover{
        filter: brightness(100%);
    }
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 200px){
        padding: 0 1rem;
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 372px;
`


const ProductTitle = styled.h1`
    font-weight: 450;
    font-size: 1rem;

`

const ProductButton = styled(Button)`
    position: absolute;
    top: 420px;
    font-size: 14px;
`

const ShowMore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
`