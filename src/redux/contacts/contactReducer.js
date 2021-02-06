import * as types from './contactActionTypes';

const initialState = {
  photo: false,
  loaded: false,
  progress: false,
  data:'',
  newPhoto:''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_RANDOM_PHOTO_REQUEST:
      return{
        ...state,
        photo: false,
        newPhoto: false,
        loaded: false,
        progress: true
      }
    case types.GET_RANDOM_PHOTO_SECCESS:
      return{
        ...state,
        photo: action.payload,
        loaded: true,
        progress: false
      }
    case types.GET_FILTERED_PHOTO_SECCESS:
      return{
        ...state,
        newPhoto: action.payload,
        loaded: true,
        progress: false
      }
    case types.GET_GRAY_PHOTO:
      return{
        ...state,
        data: action.payload
      }
    case types.GET_NORMAL_PHOTO:
      return{
        ...state,
        newPhoto: false,
      }
    case types.GET_BLURE1_PHOTO:
      return{
        ...state,
        data: action.payload
      }
    case types.GET_BLURE2_PHOTO:
      return{
        ...state,
        data: action.payload
      }
      default: 
      return state;
  }
}