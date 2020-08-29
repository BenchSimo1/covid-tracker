import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { Container, Grid } from "@material-ui/core";
import { fetchData } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <Container maxWidth="md">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Cards data={data} />
          </Grid>
          <Grid item>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          </Grid>
          <Grid item className="full-width">
            <Chart data={data} country={country} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
