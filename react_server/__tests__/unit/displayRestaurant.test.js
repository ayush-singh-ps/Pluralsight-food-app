const { displayRestaurant } = require('../../controllers/displayRestaurant');
const { getRestaurant } = require('../../db/getRestaurant');
const mock = require('./mock_data/res_mock_data.json');

jest.mock('../../db/getRestaurant');

describe('displayRestaurant', () => {
  it('should return restaurant data if found', async () => {
    const mockRestaurantData = mock;
    getRestaurant.mockResolvedValue(mockRestaurantData);

    const req = {};
    const res = { send: jest.fn() };

    await displayRestaurant(req, res);

    expect(getRestaurant).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(mockRestaurantData);
  });

  it('should return error message if getRestaurant throws an error', async () => {
    const errorMessage = 'No restaurants';
    getRestaurant.mockRejectedValue(new Error(errorMessage));

    const req = {};
    const res = { send: jest.fn() };

    await displayRestaurant(req, res);

    expect(getRestaurant).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(errorMessage);
  });
});
