import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import './App.css';

class App extends Component {
  state = {
    searchTerm: "",
    startYear:"",
    endYear: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.searchTerm, this.state.startYear, this.state.endYear);
    this.setState({ searchTerm: "", startYear: "", endYear: "" });
  };

  render() {
    return (
      <div className="container-fluid">
        <Jumbotron>
          <h1>New York Times Article Scrubber</h1>
        </Jumbotron>
        <div className="row">
          <div className="col-12">

            <div className="card">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <Form 
                  searchTerm={this.state.searchTerm}
                  startYear={this.state.startYear}
                  endYear={this.state.endYear}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </div>
            </div>

            <div className="card">
              <h5 className="card-header">Results</h5>
              <div className="card-body">
                <p className="card-text">Results go Here</p>
                <ul className="list-group">
                  <li className="list-group-item">Result 1
                    <button type="submit" className="btn btn-success float-right" id="save-art">Save</button>
                  </li>
                  <li className="list-group-item">Result 2</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h5 className="card-header">Saved Articles</h5>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Saved 1
                    <button type="submit" className="btn btn-danger float-right" id="delete-art">Remove</button>
                  </li>
                  <li className="list-group-item">Saved 2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
