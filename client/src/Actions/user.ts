import { Action, ActionCreator } from "redux";

export enum UserActionTypes {
  REGISTERED_USER = "REGISTERED_USER",
  REGISTER_ERROR = "REGISTER_ERROR",
  SIGNIN_USER = "REGISTERESIGNIN_USERD_USER",
  SIGNIN_ERROR = "SIGNIN_ERROR"
}

interface UserPayload {
  username: string;
  password: string;
}

// interface for all actions we can use
export interface RegisterUserAction extends Action {
  type: UserActionTypes.REGISTERED_USER;
  payload: UserPayload;
}

export interface RegisterUserErrorAction extends Action {
  type: UserActionTypes.REGISTER_ERROR;
}

export interface SigninUserAction extends Action {
  type: UserActionTypes.SIGNIN_USER;
  payload: { username: string; password: string };
}
export interface SigninUserErrorAction extends Action {
  type: UserActionTypes.SIGNIN_ERROR;
}

// Use action interface in our action creators
// we are currently missing the middleware layer that will process
// asyn requests to this is incomplete

// ui triggers action creator ->
// action creator triggers middleware with payload ->
// middleware perfoms action and triggers reducer ->
// reducer updates store and ui

export const registerUser: ActionCreator<RegisterUserAction> = (
  payload: UserPayload
) => {
  return {
    payload,
    type: UserActionTypes.REGISTERED_USER
  };
};
export const registerUserError: ActionCreator<RegisterUserErrorAction> = () => {
  return {
    type: UserActionTypes.REGISTER_ERROR
  };
};
export const signinUser: ActionCreator<SigninUserAction> = (
  payload: UserPayload
) => {
  return {
    payload,
    type: UserActionTypes.SIGNIN_USER
  };
};
export const signinUserError: ActionCreator<SigninUserErrorAction> = () => {
  return {
    type: UserActionTypes.SIGNIN_ERROR
  };
};
