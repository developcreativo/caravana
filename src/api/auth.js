import session from './session';

export default {
  login(username, password) {
    return session.post('/rest-auth/login/', {
      username,
      password,
    });
  },
  logout() {
    return session.post('/auth/logout/', {});
  },
  createAccount(username, password, email, rol, cedula, imagen, first_name, last_name, fecha_nac, is_active) {
    return session.post('/rest-auth/register/?format=json', {
      username, password, email, rol, cedula, imagen, first_name, last_name, fecha_nac, is_active,
    });
  },
  changeAccountPassword(password1, password2) {
    return session.post('/auth/password/change/', {
      password1,
      password2,
    });
  },
  sendAccountPasswordResetEmail(email) {
    return session.post('/auth/password/reset/', {
      email,
    });
  },
  resetAccountPassword(uid, token, new_password1, new_password2) { // eslint-disable-line camelcase
    return session.post('/auth/password/reset/confirm/', {
      uid,
      token,
      new_password1,
      new_password2,
    });
  },
  getAccountDetails() {
    return session.get('/auth/user/');
  },
  updateAccountDetails(data) {
    return session.patch('/auth/user/', data);
  },
  verifyAccountEmail(key) {
    return session.post('/registration/verify-email/', {
      key,
    });
  },
};
