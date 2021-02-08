import * as types from './lastActionTypes';

const initialState = {
  actionData1: false,
  actionData2: false,
  actionData3: false,
  actionData4: false,
  actionData5: false,
  users: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ACTION_ONE:
      return{
        ...state,
        actionData1:  action.payload
      }
    case types.ACTION_TWO:
      return{
        ...state,
        actionData2:  action.payload
      }
    case types.ACTION_THREE:
      return{
        ...state,
        actionData3:  action.payload
      }
    case types.ACTION_FOUR:
      return{
        ...state,
        actionData4:  action.payload
      }
    case types.ACTION_FIVE:
      return{
        ...state,
        actionData5:  action.payload
      }
    case types.NEW_USER:
      let arr = state.users.filter((item) => action.payload.userPhoneNumber != item.userPhoneNumber);
      console.log(arr)
      return{
        ...state,
        users:  [...arr, action.payload]
      }
  
      default: 
      return state;
  }
}