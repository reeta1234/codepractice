import {connect} from 'react-redux'
import {increment,decrement,reset,changeName,changeAge,getData} from '../actions/count'
import Count from '../components/count'

const mapPropsTostate=(state)=>{
    console.log(state)
    return {
        count:state.count,
        name:state.name,
        age:state.age
    }
}

const mapStateToProps = (dispatch) =>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement()),
        reset:()=>dispatch(reset()),
        changeName:(name)=>dispatch(changeName(name)),
        changeAge:(age)=>dispatch(changeAge(age)),
        getData:()=>dispatch(getData())
    }
}


export default connect(mapPropsTostate,mapStateToProps)(Count)