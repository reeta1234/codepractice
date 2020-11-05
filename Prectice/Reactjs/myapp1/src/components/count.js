import React from 'react'

class Count extends React.Component{
    constructor(){
        super()
        this.state ={
            count:0,
            name:'',
            age:10
        }
        this.refInput = React.createRef()

        //this.handleCount = this.handleCount.bind(this)
    }
    handleCount(){
        console.log(this.props.getData())
        this.setState({
            count:this.state.count+1
        })
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
        console.log(this.props)
        //this.props.getData();
    }

    render(){
        const {increment,decrement,reset,changeName,changeAge,count,name,age} = this.props
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <p>-----------------------------------</p>
                <p>Count from redux: {count}</p>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                Name: <input type='text' name="name" onChange={this.handleInput} ref={this.refInput}/><br/>
                age: <input type='text' name="age" onChange={this.handleInput}/><br/>
                <button onClick={()=>this.handleCount()}>Count</button>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={()=>changeName(this.state.name)}>Change Name</button>
                <button onClick={()=>changeAge(this.state.age)}>Change Name</button>
            </div>
        )
    }
}

export default Count