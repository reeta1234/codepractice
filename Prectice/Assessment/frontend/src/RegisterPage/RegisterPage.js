import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                FirstName: '',
                LastName: '',
                UserName: '',
                Password: '',
                Email:'',
                Gender:0,
                Country:''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.FirstName && user.LastName && user.UserName && user.Password && user.Email && user.Gender && user.Country) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.FirstName ? ' has-error' : '')}>
                        <label htmlFor="FirstName">First Name</label>
                        <input type="text" className="form-control" name="FirstName" value={user.FirstName} onChange={this.handleChange} />
                        {submitted && !user.FirstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.LastName ? ' has-error' : '')}>
                        <label htmlFor="LastName">Last Name</label>
                        <input type="text" className="form-control" name="LastName" value={user.LastName} onChange={this.handleChange} />
                        {submitted && !user.LastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.UserName ? ' has-error' : '')}>
                        <label htmlFor="UserName">UserName</label>
                        <input type="text" className="form-control" name="UserName" value={user.UserName} onChange={this.handleChange} />
                        {submitted && !user.UserName &&
                            <div className="help-block">UserName is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.Password ? ' has-error' : '')}>
                        <label htmlFor="Password">Password</label>
                        <input type="Password" className="form-control" name="Password" value={user.Password} onChange={this.handleChange} />
                        {submitted && !user.Password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !user.Email ? ' has-error' : '')}>
                        <label htmlFor="Email">Email</label>
                        <input type="Email" className="form-control" name="Email" value={user.Email} onChange={this.handleChange} />
                        {submitted && !user.Email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
   
                    <div className={'form-group' + (submitted && !user.Country ? ' has-error' : '')}>
                    <label htmlFor="Country">Country</label> 
                        <select className="form-control" id="Country" name="Country" value={user.Country} onChange={this.handleChange}>
                            <option value="">Country</option>
                            <option value="india">India</option>
                            <option value="USA">USA</option>
                            <option value="japan">Japan</option>
                        </select>
                        {submitted && !user.Country &&
                            <div className="help-block">Country is required</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !user.Gender ? ' has-error' : '')}>
                        <label htmlFor="LastName" style={{'marginRight':10}}>Gender</label>
                        <label className="radio-inline">
                        <input type="radio" name="Gender" value='M' onChange={this.handleChange} />Male
                        </label>
                        <label className="radio-inline">
                        <input type="radio" name="Gender" value='F' onChange={this.handleChange} />Female
                        </label>
                        {submitted && !user.Gender &&
                            <div className="help-block">Gender is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering && 
                            <img alt='' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };