import React from 'react';
import { Header } from '../components/Home/Header';
import { Wrapper } from '../components/Home/Wrapper';
import {TeaHouseList} from '../components/Home/TeaHouseList';

const Home = () => {
  return (
    <Wrapper>

        <Header></Header>
        <TeaHouseList></TeaHouseList>
    </Wrapper>
      
  );
};

export default Home;