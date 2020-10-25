import { connect } from "react-redux";

import { signout } from "src/redux/auth";
import { AuthState } from "src/redux/auth/types";
import Detail from "./Detail";

const mapState = (state: any) => {
  const { isLogged }: AuthState = state.auth;

  return {
    isLogged,
  };
};

const mapDispatch = {
  signout,
};

const connector = connect(mapState, mapDispatch);

export default connector(Detail);
