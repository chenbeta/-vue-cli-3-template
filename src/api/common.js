const HP = window.$http;

/**
 *  登录
 *
 * @param {*} data
 */
const login = data => HP.post('/login', data);

export default {
  login
};
