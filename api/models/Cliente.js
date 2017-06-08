/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    compras: {
      collection: 'vendas',
      via: 'cliente_id'
    }
  }
};

