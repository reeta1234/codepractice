import React,{ useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME,USER_INFO, API_BASE_URL,PATHNAME } from '../../constants/apiConstants';
import axios from 'axios'

function Landing(props){
    const [users,setUsers] = useState(JSON.parse(localStorage.getItem(USER_INFO)))
    useEffect(() => {
        if(!localStorage.getItem(USER_INFO) && localStorage.getItem(ACCESS_TOKEN_NAME)){
          axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
          .then(function (response) {
              if(response.status !== 200){
                redirectToLogin()
              }
              localStorage.setItem(USER_INFO,JSON.stringify(response.data))
              setUsers(response.data)
          })
          .catch(function (error) {
            redirectToLogin()
          });
        }
    },[])

    function redirectToLogin() {
        props.history.push('/');
    }
    
    return(
        users && localStorage.getItem(ACCESS_TOKEN_NAME)? (
            <div className="page-content page-container" id="page-content">
                <h1 className="my-4 text-capitalize">{users.login}</h1>
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid" src={users.avatar_url} alt={users.avatar_url}/>
                    </div>

                    <div className="col-md-4">
                        <h3 className="my-3">Details</h3>
                        <p>{users.bio}</p>
                        <ul>
                        <li>{users.email}</li>
                        <li>{users.company}</li>
                        <li>{users.blog}</li>
                        <li>{users.name}</li>
                        </ul>
                    </div>
                </div>
        </div> ):<div className="mt-5">Demo App</div>
    )
}

export default withRouter(Landing);