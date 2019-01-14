import {
  RegisterUserAction,
  RegisterUserErrorAction,
  SigninUserAction,
  SigninUserErrorAction,
  UserActionTypes
} from "../Actions/user";
import { Reducer } from "redux";

type UserActions =
  | RegisterUserAction
  | RegisterUserErrorAction
  | SigninUserAction
  | SigninUserErrorAction;

export interface UserState {
  token: string;
  authenticated: boolean;
  error?: string;
}

const initialState: UserState = {
  token: "",
  authenticated: false,
  error: ""
};

export const userReducer: Reducer<UserState> = (
  state: UserState = initialState,
  action: UserActions
) => {
  switch (action.type) {
    case UserActionTypes.REGISTERED_USER:
      return { token: "token", authenticated: true };
    case UserActionTypes.REGISTER_ERROR:
      return { token: "", authenticated: false, error: "some error" };
    case UserActionTypes.SIGNIN_USER:
      return { token: "token", authenticated: true };
    case UserActionTypes.SIGNIN_ERROR:
      return { token: "", authenticated: false, error: "some error" };
    default:
      return state;
  }
};
