import axios from 'axios'
const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
const API_ALBUM = 'https://jsonplaceholder.typicode.com/albums'
const API_PHOTO = 'https://jsonplaceholder.typicode.com/photos'

export const success = response => {
  return {
    type: GET_DATA_SUCCESS,
    payload:response
  };
};

export const failure = (error) => {
  return {
    type: GET_DATA_FAILURE,
    payload:error
  };
};

export const getAlbum = () => {
    return (dispatch) => {     
      return axios.get(API_ALBUM).then(  
        res => dispatch(success(res.data)),
        err => dispatch(failure(err))
      );
    };
  };

  export const getPhoto = (albumId) => {
    return (dispatch) => {     
      return axios.get(`${API_PHOTO}?albumId=${albumId}`).then(  
        res => dispatch(success(res.data)),
        err => dispatch(failure(err))
      );
    };
  };