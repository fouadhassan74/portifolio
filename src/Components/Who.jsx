import React from "react";
import { styled } from "styled-components";
import line from "../imgs/line.png";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Cube from "./Cube";
const Section = styled.div`
  width: 1400px;
  height: 100%;
  scroll-snap-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 50px;
  }
`;
const WhoWeAre = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const SubTitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p``;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;
function Who() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhoWeAre>
            <Line src={line} />
            <SubTitle>Who we Are</SubTitle>
          </WhoWeAre>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who;
