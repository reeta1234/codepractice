const initialState ={
    count:0,
    name:'Reeta',
    age:10,
    data:[],
    success:false,
    error:false
}

const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return Object.assign({...state,count:state.count+1})
        case 'DECREMENT':
            return Object.assign({...state,count:state.count-1})
        case 'RESET':
            return initialState
        case 'CHANGENAME':
            return Object.assign({...state,name:action.payload})
        case 'CHANGEAGE':
            return Object.assign({...state,age:action.payload})
        case 'SUCCESS':
            return Object.assign({...state,data:action.payload,success:true})
        case 'FAILER':
            return Object.assign({...state,data:action.payload,error:true})
        default:
            return state
    }
}

export default Reducer