
import React from 'react'
import styled from 'styled-components';

const Footer = () =>{
    return(
        <FooterContainer>
            <FooterLinkWrapper>
                <FooterDesc>
                    <h1>OXDORA</h1>
                    <p>Oxdora serves the best experice to the customer.</p>
                </FooterDesc>
                
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="">Support</FooterLink>
                    <FooterLink to="">Office</FooterLink>
                    <FooterLink to="">Sponserships</FooterLink>
                </FooterLinkItems>
            </FooterLinkWrapper>

            <FooterLinkWrapper>
            
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/about">Facebook</FooterLink>
                    <FooterLink to="">Twitter</FooterLink>
                    <FooterLink to="">Instagram</FooterLink>
                    <FooterLink to="">Whatsapp</FooterLink>
                </FooterLinkItems>

                <FooterLinkItems>
                    <FooterLinkTitle>Pages</FooterLinkTitle>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="">Packages</FooterLink>
                    <FooterLink to="">Newsletter</FooterLink>
                    <FooterLink to="">Subscription</FooterLink>
                </FooterLinkItems>

            </FooterLinkWrapper>

        </FooterContainer>
    )
}

export default Footer;

const FooterContainer= styled.div`
    padding: 5rem calc((100vw - 1300px) /2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`

const FooterLinkWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px){
        grid-template-columns: 1fr;
    }
`

const FooterDesc=styled.div`
    padding: 0 2rem;

    h1{
        margin-bottom: 3rem;
        color: #f26a2e;
    }

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`


const FooterLinkItems= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`

const FooterLinkTitle = styled.div`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled.div`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;
    cursor: pointer;
    &:hover{
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`