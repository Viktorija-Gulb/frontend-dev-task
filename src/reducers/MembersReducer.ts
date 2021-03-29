import { User, MembersDispatchTypes, MEMBERS_ERROR, MEMBERS_LOADING, MEMBERS_SUCCESS, ADD_NEW_USER } from "../actions/MembersActionTypes"


export interface InitialState {
  loading: boolean;
  users: User[]
  
}
const initialState: InitialState = {
  loading: false,
  users: []
}

const MembersReducer = (state: InitialState = initialState, action: MembersDispatchTypes): InitialState => {
  switch(action.type){
    case MEMBERS_ERROR: 
      return {
        ...state,
        loading: false
      }
    case MEMBERS_LOADING:
      return {
        ...state,
        loading: true
      } 
    case MEMBERS_SUCCESS:
      return {
        loading: false,
        users: action.payload
      }
    case ADD_NEW_USER: 
    console.log('action', action)
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default MembersReducer;