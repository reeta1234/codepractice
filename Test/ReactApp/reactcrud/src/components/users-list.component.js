import React from "react";
import userDataService from "../services/user.service";
import { Link } from "react-router-dom";

export default class usersList extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveusers = this.retrieveusers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveuser = this.setActiveuser.bind(this);
    this.removeAllusers = this.removeAllusers.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      users: [],
      currentuser: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveusers();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveusers() {
    userDataService.getAll()
      .then(response => {
        this.setState({
          users: response.data.data
        });
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveusers();
    this.setState({
      currentuser: null,
      currentIndex: -1
    });
  }

  setActiveuser(user, index) {
    this.setState({
      currentuser: user,
      currentIndex: index
    });
  }

  removeAllusers() {
    userDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    userDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          users: response.data.data,
          currentuser: null,
          currentIndex: -1,
        });
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, users, currentuser, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>users List</h4>

          <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveuser(user, index)}
                  key={index}
                >
                  {user.FirstName} {' '}
                  {user.LastName}
                </li>
              ))}
              {
                !users.length&&<div>Empty Result</div>
              }
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllusers}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentuser ? (
            <div>
              <h4>user</h4>
              <div>
                <label>
                  <strong>FirstName:</strong>
                </label>{" "}
                {currentuser.FirstName}
              </div>
              <div>
                <label>
                  <strong>LastName:</strong>
                </label>{" "}
                {currentuser.LastName}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentuser.Profile ? "Published" : "Pending"}
              </div>

              <Link
                to={"/users/" + currentuser.UserId}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (users && users.length>0&&
            <div>
              <br />
              <p>Please click on a user...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}