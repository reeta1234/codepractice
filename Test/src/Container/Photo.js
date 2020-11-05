import {connect} from 'react-redux'
import {getPhoto} from '../Actions/Index'
import Photo from '../Components/Photo'

const mapStateToProps =(state) =>{
    return{
        result: state.result
    }
}
const mapPropsToState =(dispatch) =>{
    return{
        getPhoto:(id)=>dispatch(getPhoto(id))
    }
}

export default connect(mapStateToProps,mapPropsToState)(Photo)