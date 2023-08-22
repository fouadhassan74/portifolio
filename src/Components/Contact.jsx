import React, { useState } from "react";
import { styled } from "styled-components";
import Map from "./Map";

const Section = styled.div`
  width: 1400px;
  height: 100vh;
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
  gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Right = styled.div``;
function Contact() {
  const [Sucess, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name='name' />
            <Input placeholder='Email' name='email' />
            <TextArea
              placeholder='Write your message'
              name='message'
              rows={10}
            />
            <Button type='submit'>Send</Button>
            {Sucess &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
}

export default Contact;
