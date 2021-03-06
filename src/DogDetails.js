import React, { Component } from "react";
import "./DogDetails.css";
import { Link } from "react-router-dom";

class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="mt-4 row justify-content-center DogDetails">
        <div className="col-11 col-lg-4">
          <div className="DogDetails-card card">
            <img className="card-img-top" src={dog.src} alt={dog.name} />
            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <h4 className="card-substitle text-muted">{dog.age} years old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {dog.facts.map((fact, idx) => (
                <li key={idx} className="list-group-item">
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/dogs" className="btn btn-info">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DogDetails;
