import React from 'react'

class ClassTest1 extends React.Component{
    constructor(){
        super()
        this.inputref = React.createRef('reet')
    }
    componentDidMount(){
        console.log(this.inputref.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputref}/>
            </div>
        )
    }
}

export default ClassTest1