const { checkLogin } = require('./login');

describe('checkLogin', () => {
  test('trả về true khi username và password đúng', () => {
    expect(checkLogin('admin', '123')).toBe(true);
  });

  test('trả về false khi username sai', () => {
    expect(checkLogin('wronguser', '123')).toBe(false);
  });

  test('trả về false khi password sai', () => {
    expect(checkLogin('admin', 'wrongpass')).toBe(false);
  });

  test('trả về false khi cả hai đều sai', () => {
    expect(checkLogin('foo', 'bar')).toBe(false);
  });

  test('trả về false khi username hoặc password rỗng', () => {
    expect(checkLogin('', '')).toBe(false);
    expect(checkLogin('admin', '')).toBe(false);
    expect(checkLogin('', '123')).toBe(false);
  });
});
