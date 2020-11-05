import React from 'react'
import Photo from '../Container/Photo'
import LazyLoad from 'react-lazyload'
import './Album.css'


const Loading = ()=>(
    <div classNameName="Post Loading">
      <h5>Loading...</h5>
    </div>
)

class Album extends React.Component{
    constructor(){
        super()
        this.state = {
            redirect: false,
            album:{}
        }
    }
    componentDidMount(){
        this.props.getAlbum();
    }
    handleAlbumList=(album)=>{
        this.setState({
            redirect:true,
            album: album
        })
    }
    render(){
        const {result} = this.props || []
        const {redirect,album} = this.state
        if (redirect) {
            return <Photo album={album}/>;
        }
        return(
            <div className="container">
                <h2>Album List</h2>
                <ul className="list-group albumbox">
                    {
                        (result && result.length>0)?result.map(album=>{
                            return <LazyLoad key={album.id} placeholder={<Loading/>}>
                                <li className="list-group-item" onClick={()=>this.handleAlbumList(album)} id={album.id}>{album.title}</li>
                            </LazyLoad>
                        }):null
                    }
                </ul>
            </div>
        )
    }
}

export default Album