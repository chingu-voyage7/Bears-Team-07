import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

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
  margin: 0.8rem 0;
  font-weight: 300;
  @media (max-width: 800px) {
    padding: inherit 0.5rem;
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 300;
  margin: 0.8rem 0;
`;

const Button = styled.button`
  margin: 0.8rem 0.4rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid transparent;
  background: #141414;
  color: #fff;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.4s ease all;
  :hover {
    background: #fff;
    color: #141414;
    border: 1px solid #141414;
  }
`;

const Section = styled.section`
  margin: 2rem 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Image = styled.img`
  max-width: 45%;
  @media (max-width: 800px) {
    max-width: 90%;
    margin: auto;
  }
`;

const Text = styled.span`
  max-width: 45%;
  padding: 0 1.3rem;
  @media (max-width: 800px) {
    max-width: 90%;
    margin: auto;
  }
`;

let randArr = [0, 1, 2, 3, 4, 5, 6, 7]; // TODO: Remove this on a later date

class LandingPage extends React.Component {
  // render
  render() {
    return (
      <div>
        <Hero>
          <Title>The Next Generation Note Taking</Title>
          <SubTitle>
            Write down your lessons without distraction and get automatic
            reminders
          </SubTitle>
          <Link to="demo">
            <Button>DEMO</Button>
          </Link>
          <Button>SIGNUP</Button>
        </Hero>
        <Section>
          <Image src="https://dnote.io/dist/8d3b92e8d84468d414d7b2ea33915eb0.png" />
          <Text>
            <Title>Hey You</Title>
            <SubTitle>
              Nothing here actually. Just another subtitle. And some Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Officia laboriosam
              veritatis exercitationem corrupti saepe. Provident culpa optio
              fugit quos voluptate minus cum fuga. Laboriosam nam, reprehenderit
              recusandae officia debitis sint!
            </SubTitle>
            <Button>GO SOMEWHERE</Button>
          </Text>
        </Section>
        )
        <Section>
          <Text>
            <Title>Hey You</Title>
            <SubTitle>
              Nothing here actually. Just another subtitle. And some Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Officia laboriosam
              veritatis exercitationem corrupti saepe. Provident culpa optio
              fugit quos voluptate minus cum fuga. Laboriosam nam, reprehenderit
              recusandae officia debitis sint!
            </SubTitle>
            <Button>GO SOMEWHERE</Button>
          </Text>
          <Image src="https://dnote.io/dist/8d3b92e8d84468d414d7b2ea33915eb0.png" />
        </Section>
        )
      </div>
    );
  }
}

export default LandingPage;
