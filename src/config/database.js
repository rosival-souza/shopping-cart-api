const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

/* test insert knex */
// knex('products').insert({
//     photo: 'photo1.jpg',
//     title: 'Livro Direito Processual',
//     price: 89.90,
//     reference: '00382-BBB',
//     amount: 1,
//     available: 1
// }).then(data => console.log(data))

/* test select knex*/
// knex('products').select('*').then(result => console.log(result))