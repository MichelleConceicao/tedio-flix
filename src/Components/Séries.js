import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
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
  background-color: #1b2631;
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
  width: 35%;
  height: 20vh;
  border-radius: 10%;
`;
const H2 = styled.h2`
  font-size: 15px;
  height: 5vh;
`;
const P = styled.p`
  font-size: 50%;
  width: 10vw;
`;

const apiSeries = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=8cfc746f5c189d03ae54c6fee2f4ad5e"
});

export default class Series extends React.Component {
  state = {
    listSeries: []
  };

  async componentDidMount() {
    const response = await apiSeries.get();
    console.log(response.data.results);

    const series = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });

    this.setState({
      listSeries: series
    });
  }

  render() {
    return (
      <Container>
        {this.state.listSeries.map((item, index) => (
          <Card key={index}>
            <H2>{item.name}</H2>
            <Image src={item.poster_path} alt={"Imagem série"} />
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
          </Card>
        ))}
      </Container>
    );
  }
}
