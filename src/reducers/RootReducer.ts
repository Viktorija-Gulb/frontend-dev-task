import  { combineReducers } from 'redux';
import MembersReducer, { InitialState } from "./MembersReducer";


export interface ApplicationState {
  members: InitialState
}

const RootReducer = combineReducers({
  members: MembersReducer
});

export default RootReducer;

