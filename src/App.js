import React from "react";
import { Cards } from "./components";

import styles from "./app.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetchData().then((fetchedData) => {
      this.setState({
        data: fetchedData,
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
