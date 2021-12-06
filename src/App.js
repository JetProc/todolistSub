import React,{useState} from 'react';
import styled from 'styled-components';
import BucketList from './components/BucketList.js';
import dummy from './db/data.json';
import "./App.css";

import backgroundImage from './images/patternedBackground.jpg';

function App() {

  const [lists, setLists] = useState(dummy.bucketLists);

  const onCheckToggle = (id) =>{
    setLists(lists=>lists.map(list =>(list.id===id ? {...list, isDone: !list.isDone} : list)));
  }

  return (
    <Container>
      <Title>Title Here</Title>
      <Body>
        <BucketList lists={lists} onCheckToggle={onCheckToggle}/>
      </Body>
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
  height:100%;
`;

const Title = styled.div`
  height:140px;
  line-height:140px;
  text-align:center;
  font-size:3em;
`;

const Body = styled.div`
  margin:1vw;
`;