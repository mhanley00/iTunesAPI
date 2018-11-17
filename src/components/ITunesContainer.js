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
    result: {},
    search: ""
  };


  componentDidMount() {
    this.searchArtists("jack+johnson");
  }

  searchArtists = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .then(res => console.log(res))
    //   .then(console.log(result))
      .catch(err => console.log(err));
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
            <Card
              heading={this.state.result.Title || "Albums"}
            >
              <AlbumDetail
                title={this.state.result.collectionName}
                src={this.state.result.artworkUrl100}
                artist={this.state.result.artistName}
                genre={this.state.result.primaryGenreName}
                released={this.state.result.releaseDate}
              />
            </Card>
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
