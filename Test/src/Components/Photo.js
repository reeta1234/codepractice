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
            <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <h4 class="card-title">{this.props.album.title}</h4>
              <p class="card-text">Id:{this.props.album.id}, UserId:{this.props.album.userId}</p>
              </div>
              <div className="col-lg-12">
                <div id="Carousel" className="carousel slide">
                  <ol className="carousel-indicators">
                    <li data-target="#Carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#Carousel" data-slide-to="1"></li>
                    <li data-target="#Carousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="item active carousel-item">
                      <div className="row">
                      {
                           (result && result.length>0)?result.slice(0,3).map(photo=>{
                             return (
                              <div class="col-md-4">
                              <div class="card mb-2">
                                <img class="card-img-top" src={photo.thumbnailUrl} className="card-img-top" alt={photo.title}/>
                                <div class="card-body">
                                  <h4 class="card-title">{photo.title}</h4>
                                  <p class="card-text">Id:{photo.id}</p>
                                </div>
                              </div>
                            </div>
                             )
                          }):null
                        }
                      </div>
                    </div>
                    <div className="item carousel-item">
                      <div className="row">
                        {
                           (result && result.length>0)?result.slice(0,3).map(photo=>{
                             return (
                              <div class="col-md-4">
                              <div class="card mb-2">
                                <img class="card-img-top" src={photo.thumbnailUrl} className="card-img-top" alt={photo.title}/>
                                <div class="card-body">
                                  <h4 class="card-title">{photo.title}</h4>
                                  <p class="card-text">Id:{photo.id}</p>
                                </div>
                              </div>
                            </div>
                             )
                          }):null
                        }
                      </div>
                    </div>
                  </div>
                  <a data-slide="prev" href="#Carousel" className="left carousel-control">&#x2039;</a>
                  <a data-slide="next" href="#Carousel" className="right carousel-control">&#x203A;</a>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Photo