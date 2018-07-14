import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import API from "./utils/Api";
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
      </div>
    );
  }
}

export default App;
