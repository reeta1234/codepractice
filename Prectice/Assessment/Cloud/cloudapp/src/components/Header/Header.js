import React, { useRef } from 'react';
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME,USER_INFO,PATHNAME} from '../../constants/apiConstants';
function Header(props) {
    const inputRef = useRef(null)
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Welcome'
    }
    function renderLogout() {
        if(props.location.pathname === '/home' || localStorage.getItem(ACCESS_TOKEN_NAME)){
            return(
                <div className="ml-auto">
                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }else{
            return(
                <div className="ml-auto">
                    <a className="btn btn-danger" href="http://localhost:3001/auth/github">Login</a>
                </div>
            )
        }
    }

    function handleLogout() {
        document.cookie = 'accessToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        localStorage.removeItem(ACCESS_TOKEN_NAME)
        localStorage.removeItem(USER_INFO)
        localStorage.removeItem(PATHNAME)
        localStorage.clear()
        props.history.push('/')
    }

    function handleSearch(){
        localStorage.setItem(PATHNAME,inputRef.current.value)
        props.history.push('/home')
    }
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
                <span className="h3" onClick={()=>props.history.push('/')}>{props.title || title}</span>
                <div className="form-inline ml-5">
                    <input className="form-control mr-2" type="text" placeholder="Search" ref={inputRef}/>
                    <button className="btn btn-success" type="submit" onClick={()=>handleSearch()}>Search</button>
                </div>
                {renderLogout()}
            </div>
        </nav>
    )
}
export default withRouter(Header);