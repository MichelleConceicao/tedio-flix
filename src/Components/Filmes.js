import React from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
   margin:0;
   padding:0;
   box-sizing:border-box;  
  }
`;

const Filmes = styled.div`
  display: flex;
  flex-direction: inline-block;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 60vw;
  margin-top: 30vh;
  margin-left: -80vw;
  color: #d7dbdd;
`;

const Card = styled.div`
  background-color:#1B2631; 
  );
  width: 30%;
  height: auto;
  margin: 6px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  border-radius: 15px;
`;
const Image = styled.img`
  width: 65%;
  border-radius: 20%;
`;
const Buscar = styled.div`
  display: flex;
  align-items: flex-end;
  border-radius: 25px;
  img {
    display: flex;
    margin-left: 0.1vw;
    top: 29%;
    height: 5vh;
    width: -10vw;
    position: absolute;
  }
`;

const Search = styled.input`
  top: 30vh;
  width: 10%;
  height: 3vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 2vw;
  position: absolute;
`;
const P = styled.p`
  font-size: 35%;
  width: 10vw;
`;
const Note = styled.span`
  font-size: 65%;
  color: rgb(18, 152, 28);
`;
const H2 = styled.h2`
  font-size: 15px;
  height: 5vh;
`;

const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=8cfc746f5c189d03ae54c6fee2f4ad5e"
});

export default class App extends React.Component {
  state = {
    listFilmes: [],
    searchFilmes: []
  };

  async componentDidMount() {
    const response = await apiFilmes.get();
    console.log(response.data.results);

    const filmes = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });

    this.setState({
      listFilmes: filmes,
      searchFilmes: filmes
    });
  }

  filter = (event) => {
    const { listFilmes } = this.state;
    const FilmesFiltrados = listFilmes.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });
    this.setState({
      searchFilmes: FilmesFiltrados
    });
  };

  render() {
    return (
      <Filmes>
        <GlobalStyle />
        <Buscar>
          <Search
            type="text"
            placeholder="O que você quer ver?"
            onChange={this.filter}
          />
          <img src="https://imagizer.imageshack.com/img923/3162/kleP5o.png" />
        </Buscar>
        {this.state.searchFilmes.map((item) => (
          <Card key={item.id}>
            <H2>{item.title}</H2>
            <Image
              src={item.poster_path}
              alt={`banner do filme: ${item.title}`}
            />
            <P
              style={{
                color: "#F7F9F9",
                margin: "4vh 1vw",
                textAlign: "justify",
                height: "-5vh",
                padding: "2 1vw"
              }}
            >
              {item.overview}
            </P>
            <Note>{item.vote_average}</Note>
          </Card>
        ))}
      </Filmes>
    );
  }
}
