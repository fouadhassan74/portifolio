import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import line from "../imgs/line.png";
import moon from "../imgs/moon.png";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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
    margin: 0;
    padding: 0 15px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
    width: 100%;
  }
`;
const Left = styled.div`
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
const WhatWeDo = styled.div`
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
const Right = styled.div`
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
const Img = styled.img`
  width: 550px;
  height: 550px;

  /* width: 800px;
  height: 600px;  */
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src={line} />
            <SubTitle>What we Do</SubTitle>
          </WhatWeDo>
          <Desc>
            {" "}
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />

            <Sphere args={[1, 100, 200]} scale={3}>
              <MeshDistortMaterial
                color='#3d1c56'
                attach='material'
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src={moon} />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
