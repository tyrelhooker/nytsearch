import React, { Component } from 'react';
<<<<<<< HEAD
import Jumbotron from "./components/Jumbotron";
||||||| merged common ancestors
import logo from './logo.svg';
=======
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import API from "./utils/Api";
>>>>>>> 93119e0e851ee62906d550a1d6b5f4740c15e1bf
import './App.css';


class App extends Component {
  state = {
    searchTerm: "",
    startYear:"",
    endYear: "",
    results: []
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
    this.searchNYT(this.state.searchTerm, this.state.startYear, this.state.endYear);
    
    this.setState({ searchTerm: "", startYear: "", endYear: "" });
  };

  searchNYT = (query1, query2, query3) => {
    API.search(query1, query2, query3)
    .then((res) => {
      console.log(res.data.response.docs);
      this.setState({ results: res.data.response.docs});
      console.log(this.state.results);
    })
    .catch(err => console.log(JSON.stringify(err)
    ));
    
  };

  render() {
    return (
<<<<<<< HEAD
      <div className="container-fluid">
        <Jumbotron>
          <h1>New York Times Article Scrubber</h1>
        </Jumbotron>
        <div className="row">
          <div className="col-12">

            <div className="card">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="search">Search Term:</label>
                    <input type="text" className="form-control" id="search-term" />
                  </div>
                  <div className="form-group">
                    <label for="start-year">Start Year:</label>
                    <input type="text" className="form-control" id="start-year"/>
                  </div>
                  <div className="form-group">
                    <label for="end-year">End Year:</label>
                    <input type="text" className="form-control" id="end-year"/>
                  </div>
                  <button type="submit" className="btn btn-primary" id="run-search">Submit</button>
                </form>
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
||||||| merged common ancestors
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
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
                  {this.state.results.map(result => {
                    return <li key={result._id} className="list-group-item">{result._id}
                      <button type="submit" className="btn btn-success float-right" id="save-art">Save</button>
                    </li>
                  })}
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
>>>>>>> 93119e0e851ee62906d550a1d6b5f4740c15e1bf
      </div>
    );
  }
}

export default App;
