import React from "react";
import { styled } from "styled-components";
import logo from "../imgs/logo.png";
import Sicon from "../imgs/search.png";
const Container = styled.div`
  padding: 10px 0px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 768px) {
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Img = styled.img`
  height: 50px;
`;
const Search = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Li = styled.li`
  list-style: none;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
`;
function Navbar() {
  return (
    <Container>
      <Right>
        {/* <Img src={logo} /> */}
        <Title>Fouad</Title>
        <Ul>
          <Li>Home</Li>
          <Li>Studio</Li>
          <Li>Works</Li>
          <Li>Contact</Li>
        </Ul>
      </Right>
      <Left>
        <Search src={Sicon} />
        <Button>Hire Now</Button>
      </Left>
    </Container>
  );
}

export default Navbar;
