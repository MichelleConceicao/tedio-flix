import React from "react";
import styled from "styled-components";

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const Main = styled.main`
  margin: 5vw;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -76vw;
    margin-top: 35vh;
    height: 60vh;
    width: 50vw;
  }
`;

const Tag = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 33vh;
  margin-left: -155vh;
  height: 5vh;
  width: 30vw;
  position: absolute;
  color: #d6eaf8;
`;

function Home() {
  return (
    <Container>
      <Main>
        <Tag>O que vamos assistir hoje??</Tag>
        <img src="https://fashioncuteblog.files.wordpress.com/2012/12/tumblr_lnxasbwarw1qd5qvoo1_500_large1.jpg?w=300" />
      </Main>
    </Container>
  );
}
