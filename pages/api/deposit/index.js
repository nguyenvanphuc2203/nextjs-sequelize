import nextConnect from 'next-connect';
const models = require('../../../db/models/index');
import middleware from '../../../middleware/auth';

const handler = nextConnect()
  // Get method
  .get(async (req, res) => {
      
    const deposits = await models.deposits.findAndCountAll({
        include: [
            {
            model: models.users,
            attributes: ['id', 'email', 'coin', 'first_name', 'last_name'],
            as: 'author',
            },
        ],
        order: [
            ['id', 'DESC'],
        ],
        limit: 5,
    });

    res.statusCode = 200;
    res.json({
      status: 'success',
      data: deposits.rows,
      total: deposits.count,
    });
  })
  // Post method
  .post(async (req, res) => {
    
  })
  // Put method
  .put(async (req, res) => {
    res.end('method - put');
  })
  // Patch method
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export default handler;
