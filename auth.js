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

const testUser = {
  id: 1,
  name: 'Test User',
  email: '',
    role: 'admin'
};

// Simulate a login for testing purposes
auth.login(testUser);


export default auth;