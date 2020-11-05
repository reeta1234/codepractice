import React,{ useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME,USER_INFO, API_BASE_URL,PATHNAME } from '../../constants/apiConstants';
import axios from 'axios'
function Home(props) {
    const [search,setSearch] = useState([])
      useEffect(() => {
        const searchText = localStorage.getItem(PATHNAME)?localStorage.getItem(PATHNAME):'ashish'
        axios.post(API_BASE_URL+'/user/search',{q:searchText},{ headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
        .then(function (response) {
            if(response.status !== 200){
              redirectToLogin()
            }
            setSearch(response.data.items)
        })
        .catch(function (error) {
          redirectToLogin()
        });
      },[localStorage.getItem(PATHNAME)])

    function redirectToLogin() {
      props.history.push('/');
    }

    function handleUserDetail(user){
      localStorage.setItem(PATHNAME,user)
      props.history.push(`/${user}`);
    }

    return(
      <div className="page-content page-container" id="page-content">
        {search!=undefined && search.length>0? (
        <div className="row">
            <div className="col-sm-6">
                <div className="list list-row block">
                    {
                    search!=undefined?search.slice(0,search.length/2).map(sval=>{
                        return (
                          <div className="list-item" data-id="19">
                            <div><a href="" onClick={() => handleUserDetail(sval.login)} data-abc="true"><span className="w-48 avatar"><img src={sval.avatar_url} alt="."/></span></a></div>
                            <div className="flex"> <a href="" onClick={() => handleUserDetail(sval.login)} className="item-author text-color" data-abc="true">{sval.login}</a>
                                <div className="item-except text-muted text-sm h-1x w-100">{sval.html_url}</div>
                            </div>
                        </div>
                        )
                    }):null
                    }
                </div>
            </div>
            <div className="col-sm-6">
                <div className="list list-row block">
                    {
                    search!=undefined?search.slice((search.length/2),search.length).map(sval=>{
                        return (
                          <div className="list-item" data-id="19">
                            <div><a href="" onClick={() => handleUserDetail(sval.login)} data-abc="true"><span className="w-48 avatar"><img src={sval.avatar_url} alt="."/></span></a></div>
                            <div className="flex"> <a href="" onClick={() => handleUserDetail(sval.login)} className="item-author text-color" data-abc="true">{sval.login}</a>
                                <div className="item-except text-muted text-sm h-1x w-100">{sval.html_url}</div>
                            </div>
                        </div>
                        )
                    }):null
                    }
                </div>
            </div>
        </div>
        ):<div className="alert alert-info">Result not found</div>}
  </div>
    )
}

export default withRouter(Home);