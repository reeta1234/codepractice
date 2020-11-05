import axios from 'axios'

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

export function increment(){
    return {
        type:'INCREMENT'
    }
}

export function decrement(){
    return{
        type:'DECREMENT'
    }
}

export function reset(){
    return{
        type:'RESET'
    }
}

export const changeName=(name)=>{
    return{
        type:'CHANGENAME',
        payload:name
    }
}

export const changeAge=(age)=>{
    return{
        type:'CHANGEAGE',
        payload:age
    }
}

export const success = (response) =>{
    return {
        type:'SUCCESS',
        payload:response
    }
}

export const failer =(error)=>{
    return{
        type:'FAILER',
        payload:error
    }
}

// export const getData=()=>{
//     return (dispatch)=>{
//         return axios.get(apiUrl)
//         .then(
//             res=>dispatch(success(res.data)),
//             err=>dispatch(failer(err))
//         )
//     }
// }

export const getData = () => {
    return (dispatch) => {     
      return axios.get(apiUrl).then(  
        res => dispatch(success(res.data)),
        err => dispatch(failer(err))
      );
    };
  };