import React from 'react'

class Count extends React.Component{
    constructor(){
        super()
        this.state ={
            name:'',
            age:1,
            error:''
        }
    }
    handleInput=(e)=>{
        this.setState({
           name:e.target.value
        })
    }
    render(){
        const { count,decrement, increment, reset, person,name,city } = this.props
        return(
            <div>
                Hello {count} {name}  {city}
                <div>
                    {this.state.error}
                    <input type='text' name="name" onChange={this.handleInput}/>
                </div>
                <div>
                    <input type='text' name="age" onChange={this.handleInput}/>
                </div>
                <div>
                    <button onClick={()=>increment(this.state.age)}>Increment</button>
                </div>
                <div>
                    <button onClick={decrement}>Decrement</button>
                </div>
                <div>
                    <button onClick={reset}>Reset</button>
                </div>
                <div>
                    <button onClick={()=>person(this.state.name)}>Person</button>
                </div>
            </div>
        )
    }
}

export default Count