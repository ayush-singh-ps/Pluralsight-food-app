const { login } = require('../../controllers/auth');
const { checkUser } = require('../../db/myusers');
const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');

jest.mock('../../db/myusers');
jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

describe('login', () => {
  it('should login user and return token if credentials are valid', async () => {
    const req = { body: { email: 'test@example.com', password: 'password' } };
    const res = { json: jest.fn() };
    const mockUser = { id: 1, email: 'test@example.com', password: 'hashed_password' };
    const mockToken = 'mockToken';

    checkUser.mockResolvedValue([mockUser]);
    compare.mockResolvedValue(true);
    jwt.sign.mockReturnValue(mockToken);

    await login(req, res);

    expect(checkUser).toHaveBeenCalledWith('test@example.com');
    expect(compare).toHaveBeenCalledWith('password', 'hashed_password');
    expect(jwt.sign).toHaveBeenCalledWith(mockUser, 'secret', { expiresIn: '10m' });
    expect(res.json).toHaveBeenCalledWith({ user: mockUser, token: mockToken });
  });

  it('should return 500 error if user not found', async () => {
    const req = { body: { email: 'test@example.com', password: 'password' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    checkUser.mockResolvedValue([]);

    await login(req, res);

    expect(checkUser).toHaveBeenCalledWith('test@example.com');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
  });

  it('should return 500 error if password is incorrect', async () => {
    const req = { body: { email: 'test@example.com', password: 'password' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const mockUser = { id: 1, email: 'test@example.com', password: 'hashed_password' };

    checkUser.mockResolvedValue([mockUser]);
    compare.mockResolvedValue(false);

    await login(req, res);

    expect(checkUser).toHaveBeenCalledWith('test@example.com');
    expect(compare).toHaveBeenCalledWith('password', 'hashed_password');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Incorrect password' });
  });

  it('should return 500 error if an error occurs during login', async () => {
    const req = { body: { email: 'test@example.com', password: 'password' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const errorMessage = 'Internal Server Error';

    checkUser.mockRejectedValue(new Error(errorMessage));

    await login(req, res);

    expect(checkUser).toHaveBeenCalledWith('test@example.com');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});
