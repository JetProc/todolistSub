import React from 'react';
import BucketListItem from './BucketListItem';
import styled from 'styled-components';

const BucketList = ({lists}) => {
    return(
        <Container>
            {lists.map(list=>(
                <BucketListItem list={list} key={list.id}/>
            ))}
        </Container>
    );
}

const Container = styled.div`
  //background-color:red;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:100%;
  height:max-content;
`;

export default BucketList;