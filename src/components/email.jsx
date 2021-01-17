
import React from 'react'
import styled from 'styled-components';
import bgEmail from'../assets/images/email.jpg';
import { Button } from './Button';

const Email = () =>{
    return(
        <EmailContainer>
            <EmailContent>
                <h1>Get latest news from OXDORA</h1>
                <p>Sign up for the newsletter for upcoming visas and offers.</p>
           
            <form action="#">
                <FormWrap>
                    <label htmlFor="email">
                        <input type="email" name="email" id="email" placeholder="Enter your email"/>
                    </label>
                    <SignUpButton as="button" primary="true" round="true" big="true" >Sign up</SignUpButton>
                </FormWrap>
            </form>
         </EmailContent>
        </EmailContainer>
    )
}

export default Email;


const EmailContainer =styled.div`
    background: linear-gradient(
        180deg,
         rgba(0,0,0,0.5) 0%,
         rgba(0,0,0,0.5) 35%,
         rgba(0,0,0,0.1) 100%),
    url(${bgEmail}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw- 1300px) /2 );
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
const EmailContent =styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;

    h1{
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem , 5vw, 3rem);
    }
    p{
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
        font-weight: 400;
    }

`
const FormWrap =styled.div`
    input{
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
    }
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        input{
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0%;
        }
    }
    
`

const SignUpButton = styled(Button)`

    height: 48px;
    @media screen and (max-width: 768px){
        width: 100%;
        min-width: 350px;
    }
    @media screen and (max-width: 400px){
        width: 100%;
        min-width: 250px;
    }
    
`