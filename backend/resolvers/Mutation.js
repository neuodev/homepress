const propertyController = require('../controllers/propertyController');
const Mutation = {
  createProperty: async (parent, { data }, ctx, info) => {
    return await propertyController.createProperty(data);
  },

};

module.exports = Mutation;
 