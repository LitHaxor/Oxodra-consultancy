import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import {FaRegLightbulb} from 'react-icons/fa';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Testimonials = ( ) =>{
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter:{
                    ext: {regex: "/(jpg)|(png)|(jpeg)/"}
                    name: {in: ["Passport","travels"]}
                }
            ){
                edges{
                    node{
                        childImageSharp{
                            fluid{
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    return(
        <TestimonialsContainer>
            <TopLine> Testimonials</TopLine>
            <Description>Testimonials from users</Description>
            <ContentWrapper>
              <ColumnOne>
              <Testimonial>
                <CheckMark/>
                <h3>Get your Passport Ready</h3>
                <p> Having trouble finding right agency for your travels or work visa. Just bring your passport and relax out fast track service will proccess documnets and other verification with ease.</p>
                </Testimonial>

                <Testimonial>
                <BulbIcon />
                <h3>Afforable Tours</h3>
                <p>Forget expensive travel deals, buy cheap and afforable deals with the best quality services. Payless for more!  </p>
                </Testimonial>

              </ColumnOne>


                <ColumnTwo>
                  {
                    data.allFile.edges.map((image,key)=>(
                        <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                    ))
                  }
                </ColumnTwo>
               
            </ContentWrapper>
            
        </TestimonialsContainer>
    )
}

export default Testimonials;



const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000000;
    padding: 5rem calc((100vw - 1300px ) /2);
    height: 100%;
`
const TopLine = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`

const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    font-size: clamp(1.5rem, 5vw ,2rem);
    font-weight: bold;
`

const ContentWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   padding: 0 2rem;

   @media screen and (max-width: 768px){
       grid-template-columns: 1fr;
   }
`
const ColumnOne = styled.div`
   display: grid;
   grid-template-rows: 1fr 1fr;

`
const ColumnTwo = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin-top: 2rem;
   grid-gap: 10px;

   @media screen and (max-width: 500px){
       grid-template-columns: 1fr;
   }
`

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    h3{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    P{
        color: #3b3b3b;
    }
`


const Images = styled(Img)`
    border-radius: 10px;
    height:100%;
`

const CheckMark = styled(IoMdCheckmarkCircleOutline)`
    color: #3fffa8;
    font-size: 2rem;
    margin-bottom: 1rem;
`

const BulbIcon = styled(FaRegLightbulb)`
    color: #3fffef;
    font-size: 2rem;
    margin-bottom: 1rem;
`