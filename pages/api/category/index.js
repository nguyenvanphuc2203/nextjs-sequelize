import nextConnect from 'next-connect';
const models = require('../../../db/models/index');
import middleware from '../../../middleware/auth';

const handler = nextConnect()
  // Get method
  .get(async (req, res) => {
    const {
      query: { nextPage },
      method,
      body,
    } = req;

    const categories = await models.product_categories.findAndCountAll({
      order: [
        ['id', 'DESC'],
      ],
    });

    res.statusCode = 200;
    res.json({
      status: 'success',
      data: categories.rows,
      total: categories.count,
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
