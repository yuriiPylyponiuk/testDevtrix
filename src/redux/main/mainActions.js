import * as types from './mainActionTypes';

export function getName(payload){
  return {type: types.GET_NAME, payload}
}

export function getDescription(payload){
  return {type: types.GET_DESCRIPTION, payload}
}

export function getStatus(payload){
  return {type: types.GET_STATUS, payload}
}