/**
 * Kiểm tra thông tin đăng nhập.
 * @param {string} username - Tên đăng nhập
 * @param {string} password - Mật khẩu
 * @returns {boolean} true nếu đăng nhập hợp lệ, false nếu không
 */
function checkLogin(username, password) {
  if (username === 'admin' && password === '1234') {
    return true;
  }
  return false;
}

// Hỗ trợ dùng trong Node.js (Jest/Mocha) và trong trình duyệt
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { checkLogin };
}
