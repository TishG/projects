import React from "react";

class Footer extends React.Component {
  state = {
    year: null
  };
  componentDidMount() {
    return this.setState({
      year: new Date().getFullYear()
    });
  }
  render() {
    return (
      <footer> &copy; Projects by Tish Griffiths {this.state.year}</footer>
    );
  }
}

export default Footer;
