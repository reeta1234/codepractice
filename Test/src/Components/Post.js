import React from 'react'

const Post = ({id,title,body})=>{
    <div className="post">
        <div className="post-body">
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    </div>
}

export default Post