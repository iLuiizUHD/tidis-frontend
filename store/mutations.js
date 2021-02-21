import initialState from "./state";
export default {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser }) => {
    const { uid, email, emailVerified } = authUser;
    state.user = { uid, email, emailVerified };
  },

  RESET_STORE: (state) => {
    Object.assign(state, initialState());
  },
};
