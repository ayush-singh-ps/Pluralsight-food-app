const { showCat } = require('../../controllers/category');
const { getCat } = require('../../db/getCat');
const MOCK_DATA = require('./mock_data/category_mock.json');

jest.mock('../../db/getCat');

describe('showCat', () => {
  it('should return cat data if found', async () => {
    const mockCatData = MOCK_DATA;
    getCat.mockResolvedValue({ rows: mockCatData });

    const req = { params: { id: 223 } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    await showCat(req, res);

    expect(getCat).toHaveBeenCalledWith(223);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockCatData);
  });

  it('should return 500 error if getCat throws an error', async () => {
    const errorMessage = 'Database Error';
    getCat.mockRejectedValue(new Error(errorMessage));

    const req = { params: { id: 223 } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    await showCat(req, res);

    expect(getCat).toHaveBeenCalledWith(223);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(errorMessage);
  });
});
