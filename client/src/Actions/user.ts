import { Action, ActionCreator } from "redux";

export enum UserActionTypes {
  REGISTERED_USER = "REGISTERED_USER",
  REGISTER_ERROR = "REGISTER_ERROR",
  SIGNIN_USER = "REGISTERESIGNIN_USERD_USER",
  SIGNIN_ERROR = "SIGNIN_ERROR"
}

// interface for all actions we can use
export interface RegisterUserAction extends Action {
  type: UserActionTypes.REGISTERED_USER;
}

export interface RegisterUserErrorAction extends Action {
  type: UserActionTypes.REGISTER_ERROR;
}

export interface SigninUserAction extends Action {
  type: UserActionTypes.SIGNIN_USER;
}
export interface SigninUserErrorAction extends Action {
  type: UserActionTypes.SIGNIN_ERROR;
}

// Use action interface in our action creators

export const registerUser: ActionCreator<RegisterUserAction> = () => {
  return {
    type: UserActionTypes.REGISTERED_USER
  };
};
export const registerUserError: ActionCreator<RegisterUserErrorAction> = () => {
  return {
    type: UserActionTypes.REGISTER_ERROR
  };
};
export const signinUser: ActionCreator<SigninUserAction> = () => {
  return {
    type: UserActionTypes.SIGNIN_USER
  };
};
export const signinUserError: ActionCreator<SigninUserErrorAction> = () => {
  return {
    type: UserActionTypes.SIGNIN_ERROR
  };
};
