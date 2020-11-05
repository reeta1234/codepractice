const initialState = {
    count:0,
    name:'Reeta',
    city:'bangalore'
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return Object.assign({...state,count:state.count+action.payload})
        case 'DECREMENT':
            return Object.assign({...state,count:state.count-1})
        case 'RESET':
            return initialState
        case 'PERSON':
            return Object.assign({...state,name:action.payload})
        default:
            return state
    }
}

export default reducer