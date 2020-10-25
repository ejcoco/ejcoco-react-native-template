export const Actions = {
  SIGNIN: 'AUTH/SIGNIN',
  SIGNOUT: 'AUTH/SIGNOUT',
  LOADING: 'AUTH/LOADING',
};

export interface AuthState {
  isLogged: boolean | null;
  isLoading: boolean;
}

type ActionTypes = typeof Actions.SIGNIN | typeof Actions.SIGNOUT;

export interface AuthAction {
  type: ActionTypes;
  payload: any;
}

export interface ASYNC_STORAGE_KEYS {
  TOKEN: string;
}
