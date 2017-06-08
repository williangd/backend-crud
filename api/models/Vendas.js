/**
 * Vendas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cliente_id: {
      model: 'cliente'
    },
    produto_id: {
      model: 'produto' 
    }
  }
};

