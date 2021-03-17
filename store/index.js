export const state = () => ({
  user: {
    email: "",
    displayName: "",
    photoUrl: "",
  },
});

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    const { uid, email, displayName, photoUrl } = authUser;
    state.user = { uid, email, displayName, photoUrl };
  },
};

export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  },
};
