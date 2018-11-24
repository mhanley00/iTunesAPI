import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import AlbumDetail from "./AlbumDetail";
import API from "../utils/API";

class ITunesContainer extends Component {
  state = {
    result: [],
    search: ""
  };


  componentDidMount() {
    this.searchArtists(this.state.search);

  }

  searchArtists = query => {
    API.search(query)
      .then(res => (this.setState({ result: res })))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArtists(this.state.search);
    // console.log(`collectionName:${results.collectionName}`);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">

            {this.state.result.map((results, index) => (
              <Card
                key={index}
                heading={results.collectionCensoredName || "Albums"}
              >

                <AlbumDetail
                  key={index}
                  title={results.collectionName}
                  src={results.artworkUrl100}
                  artist={results.artistName}
                  genre={results.primaryGenreName}
                  released={results.releaseDate}
                />

              </Card>
            ))}

          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                defaultValue={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ITunesContainer;
