import React from 'react'

class Test extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.getData();
    }
    render(){
        const {data} = this.props.result || []
        return(
            (data && data.length>0)?data.map(d=>{
                return <div>
                    <li>{d.from}</li>
                    <li>{d.to}</li>
                    <li>{d.intensity.forecast}</li>
                    <li>{d.intensity.actual}</li>
                    <li>{d.intensity.index}</li>
                </div>
            }):null
        )
    }
}

export default Test