import axios from 'axios';
import { Dispatch } from 'redux';
import { MembersDispatchTypes, MEMBERS_ERROR, MEMBERS_LOADING, MEMBERS_SUCCESS } from './MembersactionTypes';


export const getMembers = () => async (dispatch: Dispatch<MembersDispatchTypes>) => {
  try {
    dispatch({
      type: MEMBERS_LOADING
    })

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    dispatch({
      type: MEMBERS_SUCCESS,
      payload: res.data
    })
    

  } catch(e) {
    dispatch({
      type: MEMBERS_ERROR
    })
  }

}