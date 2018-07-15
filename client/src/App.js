import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import './App.css';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
