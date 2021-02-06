import * as types from './photoActionTypes';

export function getPhoto(payload){
  return {type: types.GET_PHOTO, payload}
}

