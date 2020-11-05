import React from "react";
import userDataService from "../services/user.service";

export default class Adduser extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.saveuser = this.saveuser.bind(this);
    this.newuser = this.newuser.bind(this);

    this.state = {
      id: null,
      FirstName: "",
      LastName: "", 
      Profile: "",
      submitted: false,
    };
  }

  onChangeInput(e) {
    this.setState({
      [ e.target.name]: e.target.value
    });
  }

  saveuser() {
    var data = {
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Profile: this.state.Profile
    };

    userDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.UserId,
          FirstName: response.data.FirstName,
          LastName: response.data.LastName,
          Profile: response.data.Profile,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newuser() {
    this.setState({
      id: null,
      FirstName: "",
      LastName: "",
      Profile: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newuser}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">FirstName</label>
              <input
                type="text"
                className="form-control"
                id="FirstName"
                required
                value={this.state.FirstName}
                onChange={this.onChangeInput}
                name="FirstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">LastName</label>
              <input
                type="text"
                className="form-control"
                id="LastName"
                required
                value={this.state.LastName}
                onChange={this.onChangeInput}
                name="LastName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Profile</label>
              <input
                type="text"
                className="form-control"
                id="Profile"
                required
                value={this.state.Profile}
                onChange={this.onChangeInput}
                name="Profile"
              />
            </div>

            <button onClick={this.saveuser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}