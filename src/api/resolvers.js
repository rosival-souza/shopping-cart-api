const db = require('../config/database')
module.exports ={
    Query:{

        async getProduct(_, { id }){
            return await db('products').where({ id }).first()
        },

        async getProducts(_, { limit }){
            return await db('products')
        }
    },
    Mutation:{
        async createProduct (_, { input }){
            const result = await db('products').insert({
                /* test */ 
                title: input.title
            })

            const id = result[0]
            return await db('products').where({ id }).first()
        }
    }
}