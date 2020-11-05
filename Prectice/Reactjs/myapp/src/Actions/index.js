export const increment=(age)=>{
    return{
        type:'INCREMENT',
        payload:age
    }
}

export const decrement=()=>{
    return{
        type:'DECREMENT'
    }
}

export const reset=()=>{
    return{
        type:'RESET'
    }
}

export const person=(name)=>{
    return{
        type:'PERSON',
        payload:name
    }
}
