import * as types from './lastActionTypes';

export function action1(payload){
  return {type: types.ACTION_ONE, payload}
}
export function action2(payload){
  return {type: types.ACTION_TWO, payload}
}
export function action3(payload){
  return {type: types.ACTION_THREE, payload}
}
export function action4(payload){
  return {type: types.ACTION_FOUR, payload}
}
export function action5(payload){
  return {type: types.ACTION_FIVE, payload}
}
export function createNewUser(payload){
  return {type: types.NEW_USER, payload}
}
