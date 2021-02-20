const propertyController = require('../controllers/propertyController');
const Query = {
  properties: async (parent, args, ctx, info) => {
    return await propertyController.getProperties();
  },
  property: async (parent, { id }, ctx, info) => {
    return await propertyController.getProperty(id);
  },
};

module.exports = Query;
