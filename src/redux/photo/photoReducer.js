import * as types from './photoActionTypes';

const initialState = {
  photos: [],
  show: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PHOTO:
      return{
        ...state,
        photos:  [...state.photos, ...action.payload],
        show: true
      }
  
      default: 
      return state;
  }
}