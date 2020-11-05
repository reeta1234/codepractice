import React,{ useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL, PATHNAME } from '../../constants/apiConstants';
import axios from 'axios'
function Detail(props) {
    const [detail,setDetail] = useState({})
      useEffect(() => {
        axios.post(API_BASE_URL+'/user/detail',{q:localStorage.getItem(PATHNAME)},{ headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
            setDetail(response.data)
        })
        .catch(function (error) {
          redirectToLogin()
        });
      },[])

      function redirectToLogin() {
        props.history.push('/');
      }
    return(
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <img className="img-fluid" src={detail.avatar_url} alt={detail.avatar_url}/>
          </div>

          <div className="col-md-4">
            <h3 className="my-3">Details</h3>
            <p>{detail.bio}</p>
            <ul>
              <li>{detail.email}</li>
              <li>{detail.company}</li>
              <li>{detail.blog}</li>
              <li>{detail.name}</li>
            </ul>
          </div>
        </div>
    </div>

    )
}

export default withRouter(Detail);