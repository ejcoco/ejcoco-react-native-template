import AsyncStorage from '@react-native-community/async-storage';

import { Actions, AuthState, AuthAction, ASYNC_STORAGE_KEYS } from './types';
import { Dispatch } from 'src/redux/types';

const AUTH_KEYS: ASYNC_STORAGE_KEYS = {
  TOKEN: '@TOKEN',
};

const INITIAL_STATE: AuthState = {
  isLogged: false,
  isLoading: false,
};

// Reducer
export default function reducer(state = INITIAL_STATE, action: AuthAction) {
  const { payload } = action;
  switch (action.type) {
    case Actions.SIGNIN:
      return {
        ...state,
        isLogged: true,
      };
    case Actions.SIGNOUT:
      return {
        ...state,
        isLogged: false,
      };
    case Actions.LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    default:
      return state;
  }
}

function setLoading(dispatch: Dispatch, flag: boolean) {
  dispatch({
    type: Actions.LOADING,
    payload: { isLoading: flag },
  });
}

// Action Creators
export function signin() {
  return async (dispatch: Dispatch) => {
    setLoading(dispatch, true);
    await AsyncStorage.setItem(AUTH_KEYS.TOKEN, '__MOCKED_TOKEN__');
    setTimeout(() => {
      dispatch({
        type: Actions.SIGNIN,
      });
      setLoading(dispatch, false);
    }, 1500);
  };
}

export function signout() {
  return async (dispatch: Dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: Actions.SIGNOUT,
    });
  };
}

export function checkAuth() {
  return async (dispatch: Dispatch) => {
    const token = await AsyncStorage.getItem(AUTH_KEYS.TOKEN);
    console.log('token', token);
    dispatch(token ? signin() : signout());
  };
}
