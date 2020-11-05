import {connect} from 'react-redux'
import {getAlbum} from '../Actions/Index'
import Album from '../Components/Album'

const mapStateToProps =(state) =>{
    return{
        result: state.result
    }
}
const mapPropsToState =(dispatch) =>{
    return{
        getAlbum:()=>dispatch(getAlbum())
    }
}

export default connect(mapStateToProps,mapPropsToState)(Album)