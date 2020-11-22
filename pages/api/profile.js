import nextConnect from 'next-connect';
import middleware from '../../middleware/auth';
const models = require('../../db/models/index');

const handler = nextConnect()
  // Middleware
  .use(middleware)
  // Get method
  .get(async (req, res) => {
    const { user } = req;
    const profile = await models.users.findOne({
      where: {
        id: user.id,
      },
      attributes: ['id', 'email', 'coin'],
    });
    res.statusCode = 200;
    return res.json({ status: 'success', data: profile });
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