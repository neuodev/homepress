const propertyController = require('../controllers/propertyController');
const Query = {
  properties: async (parent, { filter }, ctx, info) => {
  
    return await propertyController.getProperties(filter);
  },
  property: async (parent, { id }, ctx, info) => {
    return await propertyController.getProperty(id);
  },
};

module.exports = Query;
