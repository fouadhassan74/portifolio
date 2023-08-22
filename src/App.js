import { styled } from "styled-components";
import Hero from "./Components/Hero.jsx";
import Works from "./Components/Works.jsx";
import Who from "./Components/Who.jsx";
import Contact from "./Components/Contact.jsx";
import bg from "./imgs/bg.jpeg";
const Conatiner = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  color: white;
  background-image: url(${bg});
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  return (
    <Conatiner>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Conatiner>
  );
}

export default App;
