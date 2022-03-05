import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '../components/Landing/Button';
import { Wrapper } from '../components/Landing/Wrapper';


const Home = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/home');
  }
  return (
    <Wrapper>
      <h1>안녕하세요.</h1>
      <h1>다도패스에 오신 걸 환영합니다.</h1>
      <Button onClick={navigateToHome}>다도패스 들어가기</Button>
    </Wrapper>
  );
};

export default Home;