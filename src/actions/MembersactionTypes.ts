export const MEMBERS_LOADING = "MEMBERS_LOADING";
export const MEMBERS_ERROR = "MEMBERS_ERROR";
export const MEMBERS_SUCCESS = "MEMBERS_SUCCESS";
export const ADD_NEW_USER = "ADD_NEW_USER";

export interface User {
  [index: string]: any;
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface MembersLoading {
  type: typeof MEMBERS_LOADING;
}

export interface MembersError {
  type: typeof MEMBERS_ERROR;
}

export interface MembersSuccess {
  type: typeof MEMBERS_SUCCESS,
  payload: User[]
}

export interface AddNewUser {
  type: typeof ADD_NEW_USER ,
  payload: User
}

export type MembersDispatchTypes = MembersLoading | MembersError | MembersSuccess | AddNewUser;