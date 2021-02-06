import * as types from './mainActionTypes';

const initialState = {
  name: '',
  description: '',
  status: ''
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_NAME:
      return{
        ...state,
        name: action.payload
      }
    case types.GET_DESCRIPTION:
      return{
        ...state,
        description: action.payload
      }
    case types.GET_STATUS:
      return{
        ...state,
        status: action.payload
      }
      default: 
      return state;
  }
}