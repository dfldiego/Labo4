import React, { Fragment, Component } from "react";
import Navigation from "./Navigation";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Container from "react-bootstrap/Container";

class DondeEstamos extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Container>
          <Map
            google={this.props.google}
            initialCenter={{
              lat: -32.88582,
              lng: -68.83859,
            }}
            zoom={18}
            onClick={this.onMapClicked}
          />
          <Marker
            title={"Esquina San Martin y Las Heras. Mendoza."}
            name={"aqui"}
            position={{ lat: -32.88582, lng: -68.83859, }}
          />
        </Container>
      </Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDQ9uJsob9ZnJPrAKElkIiOcheaRs3thJM",
})(DondeEstamos);
