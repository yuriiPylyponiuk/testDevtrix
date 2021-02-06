import * as types from './contactActionTypes';

export function getNumber(payload){
  return {type: types.GET_NUMBER, payload}
}
export function getEmail(payload){
  return {type: types.GET_EMAIL, payload}
}
