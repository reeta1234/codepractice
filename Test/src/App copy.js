import React, { useContext, useMemo, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Container/Index'
import Test1 from './Components/Test1'
import ClassTest1 from './Components/ClassTest1';
import ErrorBoundry from './Components/ErrorBoundry'
//import Post from './Components/Post';
import data from './data'
import LazyLoad from 'react-lazyload'

const Loading = ()=>(
<div className="Post Loading">
  <h5>Loading...</h5>
</div>
)

const Post = ({id,title,body})=>(
  <div className="post">
      <div className="post-body">
          <h4>{title}</h4>
          <p>{body}</p>
      </div>
  </div>
);


function App() {
  console.log(data)
  return (
    <div className="App">
      {/* <Test/> */}
      {/* <Test1/> */}

      {
        data.map(post=>(
          <LazyLoad key={post.id} placeholder={<Loading/>}>
            <Post key={post.id} {...post}/>
          </LazyLoad>
        ))
      }
      
      {/* <ClassTest1/> */}
      {/* <ErrorBoundry/> */}
    </div>
  );
}

export default App;