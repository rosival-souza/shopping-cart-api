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
                photo: input.photo,
                title: input.title,
                price: input.price,
                reference: input.reference,
                amount: input.amount,
                available: input.available,
            })

            const id = result[0]
            return await db('products').where({ id }).first()
        },
        async createSales (_, { input }){

            const result = await db('sales').insert(input)
            const id = result[0]
            return await db('sales').where({ id }).first()
        },

        /* prototype insert array */ 
        // async createUsers (_, { input }){
        //     // console.log(input)
        //     const result = await db('users').insert(input)
        //     const id = result
        //     return await db('users').where({ id }).first()
        // }
    }
}