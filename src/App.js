import React, { Component } from "react";
import Início from "./Components/Início";
import Filmes from "./Components/Filmes";
import Series from "./Components/Séries";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  background-color:#1B2631; 


  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  font-size: 80px;
  font-weight: 400px;
  margin-top: 5vw;
  color: #d0d3d4;
  text-shadow: 2px 2px #fcf3cf;
  font-family: "Bebas Neue", cursive;
  position: absolute;
`;

const Nav = styled.nav`
  height: 30vh;
  width: 20%;
  display: flex;
  margin-left: 80%;
  align-items: flex-end;
  justify-content: space-evenly;
`;

const List = styled.ul`
  display: flex;
  padding: 1vw;
  font-size: 2vw;
`;

const Item = styled.li`
  padding: 0.5vw;
  width: 100%;
  font-size: 1.5vw;
  color: #641e16;
  a:visited {
    color: #85c1e9;
  }
  a:link {
    text-decoration: none;
  }
`;

const Content = styled.div`
  margin-top: 40px;
`;

const Box = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Box>
        <GlobalStyle />
        <Title>Tédioflix</Title>
        <Router>
          <Nav>
            <List>
              <Item>
                <Link to="/">Início</Link>
              </Item>
              <Item>
                <Link to="/Filmes">Filmes</Link>
              </Item>
              <Item>
                <Link to="/Series">Séries</Link>
              </Item>
            </List>
          </Nav>

          <Content>
            <Routes>
              <Route path="/" element={<Início />} />
              <Route path="Filmes" element={<Filmes />} />
              <Route path="Series" element={<Series />} />
            </Routes>
          </Content>
        </Router>
      </Box>
    );
  }
}

export default App;
