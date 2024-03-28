const { showItem } = require('../../controllers/items');
const { getItem } = require('../../db/getItem');
const MOCK_DATA = require('./mock_data/items_mock.json');

jest.mock('../../db/getItem');

describe('showItem', () => {
  it('should return item data if found', async () => {
    const mockItemData = MOCK_DATA;
    getItem.mockResolvedValue({ rows: mockItemData });

    const req = { params: { resid: 223, catid: 154 } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    await showItem(req, res);

    expect(getItem).toHaveBeenCalledWith(223, 154);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockItemData);
  });

  it('should return 500 error if getItem throws an error', async () => {
    const errorMessage = 'database error';
    getItem.mockRejectedValue(new Error(errorMessage));

    const req = { params: { resid: 223, catid: 154 } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    await showItem(req, res);

    expect(getItem).toHaveBeenCalledWith(223, 154);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(errorMessage);
  });
});
