import React from 'react'

class Photo extends React.Component{
    constructor(){
        super()
        this.state = {
            redirect: false
        }
    }
    componentDidMount(){
        this.props.getPhoto(this.props.album.id);
    }
    handlePhotoList=(e)=>{
        this.setState({
            redirect:true
        })
    }
    render(){
        const {result} = this.props || []
        return(
            <div id="demo" className="carousel slide carousel-multi-item container rounded border mt-2" data-ride="carousel">
                <div className="card-body">
                    <h5 className="card-title">{this.props.album.title}</h5>
                    <p className="card-text">Id:{this.props.album.id},UserId:{this.props.album.userId}</p>
                </div>
                <hr/>
                <div className="carousel-inner row" role="listbox">
                    {
                        (result && result.length>0)?result.slice(0,3).map(photo=>{
                            if(photo.id==1){
                                return (
                                    <div className="carousel-item col-sm active" key={photo.id} style={{width:200}}>
                                        <a href={photo.url}>
                                            <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} width="500" height="500"/>
                                        </a>
                                        <div className="card-body">
                                            <h5 className="card-title">{photo.title}</h5>
                                            <h5 className="card-title">Id:{photo.id}</h5>
                                        </div>
                                    </div>
                                )
                            }else{
                                return (
                                    <div className="carousel-item col-sm" key={photo.id}>
                                        <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title}  width="500" height="500"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{photo.title}</h5>
                                            <h5 className="card-title">Id:{photo.id}</h5>
                                        </div>
                                    </div>
                                )
                            }
                        }):null
                    }
                </div>
            
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        )
    }
}

export default Photo