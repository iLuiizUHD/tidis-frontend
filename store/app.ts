interface AuthUser {
  authenticated: boolean;
  name: string;
  email: string;
  pfpURI: string;
}

export const state = () => {
  const authenticatedUser: AuthUser = {
    authenticated: false,
    email: "",
    name: "",
    pfpURI: "",
  };
};

export const mutations = {
  setUser(state: any, { authenticated, email, name, pfpURI }: AuthUser) {
    Object.assign(state.authenticatedUser, {
      authenticated,
      email,
      name,
      pfpURI,
    });
  },
};
