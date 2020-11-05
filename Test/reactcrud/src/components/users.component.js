import React from "react";
import userDataService from "../services/user.service";

export default class user extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.getuser = this.getuser.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateuser = this.updateuser.bind(this);
    this.deleteuser = this.deleteuser.bind(this);

    this.state = {
      currentuser: {
        id: null,
        FirstName: "",
        LastName: "", 
        Profile: false,
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getuser(this.props.match.params.id);
  }

  onChangeInput(e) {
    this.setState(function(prevState) {
     return {
        currentuser: {
          ...prevState.currentuser,
          [e.target.name]: e.target.value,
        }
      };
    });
  }

  getuser(id) {
    userDataService.get(id)
      .then(response => {
        this.setState({
          currentuser: response.data.data[0]
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    console.log(this.state.currentuser)
    var data = {
      id: this.state.currentuser.UserId,
      FirstName: this.state.currentuser.FirstName,
      LastName: this.state.currentuser.LastName,
      Profile: this.state.currentuser.Profile,
      published: status
    };

    userDataService.update(this.state.currentuser.UserId, data)
      .then(response => {
        this.setState(prevState => ({
          currentuser: {
            ...prevState.currentuser,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateuser() {
    console.log(this.state.currentuser)
    userDataService.update(
      this.state.currentuser.UserId,
      this.state.currentuser
    )
      .then(response => {
        this.setState({
          message: "The user was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteuser() {    
    userDataService.delete(this.state.currentuser.UserId)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/users')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentuser } = this.state;
    return (
      <div>
        {currentuser ? (
          <div className="edit-form">
            <h4>user</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  id="FirstName" 
                  name="FirstName"
                  value={currentuser.FirstName}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="LastName">LastName</label>
                <input
                  type="text"
                  className="form-control"
                  id="LastName"
                  name="LastName"
                  value={currentuser.LastName}
                  onChange={this.onChangeInput}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Profile">Profile</label>
                <input
                  type="text"
                  className="form-control"
                  id="Profile"
                  name="Profile"
                  value={currentuser.Profile}
                  onChange={this.onChangeInput}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentuser.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentuser.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteuser}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateuser}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a user...</p>
          </div>
        )}
      </div>
    );
  }
}