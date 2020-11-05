import { connect } from 'react-redux';
import { decrement, increment, reset, person } from '../Actions'
import Count from '../Components/Count'

const mapStateToProps =(state) =>{
    return {
        count:state.count,
        name:state.name,
        city:state.city
    }
}

const mapPropsToState=(dispatch)=>{
    return{
        increment:(age)=>dispatch(increment(age)),
        decrement:()=>dispatch(decrement()),
        reset:()=>dispatch(reset()),
        person:(name)=>dispatch(person(name))
    }
}

export default connect(mapStateToProps,mapPropsToState)(Count)