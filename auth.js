const auth = {
  isAuthenticated: false,
  user: null,

  login(user) {
    this.isAuthenticated = true;
    this.user = user;
  },

  logout() {
    this.isAuthenticated = false;
    this.user = null;
  },

  getUser() {
    return this.user;
  },

  getAuthStatus() {
    return this.isAuthenticated;
  },

  getSpecificUserInfo(infoKey) {
    return this.user ? this.user[infoKey] : null;
  }
};

export default auth;