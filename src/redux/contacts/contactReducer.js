import * as types from './contactActionTypes';

const initialState = {
  phoneNumber: '',
  email: '',
  required: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_NUMBER:
      return{
        ...state,
        phoneNumber: action.payload,
        required: true
      }
    case types.GET_EMAIL:
      return{
        ...state,
        email: action.payload
      }
      default: 
      return state;
  }
}