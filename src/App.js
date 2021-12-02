import React from 'react';
import styled from 'styled-components';

import "./App.css";

import backgroundImage from './images/patternedBackground.jpg';

function App() {
  return (
    <Container>
      <Title>Title Here</Title>
      <Body>Body Here</Body>
    </Container>
  );
}

export default App;

const Container = styled.div`
  font-family: myFont;

  display:flex;
  flex-direction:column;
  background-image:url(${backgroundImage});

  width:100%;
  height:100vh;
`;

const Title = styled.div`
  height:140px;
  line-height:140px;
  text-align:center;
  font-size:3em;
`;

const Body = styled.div`
  margin:1vw;
  font-size:2em;
`;