import React from 'react';
import styled from 'styled-components';

const Hero = styled.div`
    font-family: sans-serif;
    background: #f4f5f8;
    text-align: center;
    padding: 10rem 0;
    @media (max-width: 800px) {
        border: 1px solid transparent;
    }
`;

const Title = styled.h2`
    font-size: 2.4rem;
    margin: .8rem 0;
    font-weight: 300;
    @media (max-width: 800px) {
        padding: inherit .5rem;
        font-size: 1.7rem;
        font-weight: 600;
    }
`;

const SubTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 300;
    margin: .8rem 0;
`;

const Button = styled.button`
    margin: .8rem .4rem;
    padding: .5rem 1.5rem;
    border: 1px solid transparent;
    background: #141414;
    color: #fff;
    border-radius: 4px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: .4s ease all;
    :hover {
        background: #fff;
        color: #141414;
        border: 1px solid #141414;
    }
`

const Section = styled.section`
    text-align: center;
    margin: 2rem 0;
`;

const Image = styled.img`
    width: 50%;
    margin: 2rem auto;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

const Text = styled.div`
    padding: 0 1.3rem;
`;

let randArr = [0, 1, 2, 3, 4, 5, 6, 7];     // TODO: Remove this on a later date

class LandingPage extends React.Component {
    
    // render
    render() {
        return(
            <div>
                <Hero>
                    <Title>The Next Generation Note Taking</Title>
                    <SubTitle>Write down your lessons without distraction and get automatic reminders</SubTitle>
                    <Button>DEMO</Button>
                    <Button>SIGNUP</Button>
                </Hero>
                {
                    randArr.map(val => 
                    <Section>
                        <Image src="https://dnote.io/dist/8d3b92e8d84468d414d7b2ea33915eb0.png"/>
                        <Text>
                            <Title>Hey You</Title>
                            <SubTitle>Nothing here actually. Just another subtitle. And some Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laboriosam veritatis exercitationem corrupti saepe. Provident culpa optio fugit quos voluptate minus cum fuga. Laboriosam nam, reprehenderit recusandae officia debitis sint!</SubTitle>
                            <Button>GO SOMEWHERE</Button>
                        </Text>
                    </Section>)
                }
            </div>
        )
    }
}

export default LandingPage;