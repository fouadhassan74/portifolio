import { styled } from "styled-components";
import React from "react";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];
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
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
const Right = styled.div``;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.li`
 list-style: none;
  font-size: 85px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    height: 100%;
    font-size: 24px;
    -webkit-text-stroke: 1px white;
  color: transparent;
  }
  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    &::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
  
`;

function Works() {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((p) => (
              <ListItem key={p} text={p}>
                {p}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
}

export default Works;
