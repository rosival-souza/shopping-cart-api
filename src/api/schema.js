const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const productsAttribs = `
    id: Int
    photo: String!
    title: String!
    price: Float!
    reference: String!
    amount: Int!
    available: Int!
`
const salesAttribs = `
    id: Int
    title: String!
    price: Float!
    reference: String!
    amount: Int!
    available: Int!
    photo: String
`
const typeDefs = `
    type Product {
        ${productsAttribs}
    }
    type Sales {
        ${salesAttribs}
    }
    type Query {
        getProduct(id: ID!): Product
        getProducts: [Product]
        getSales: [Sales]

    }
    input ProductInput {
        ${productsAttribs}
    }
    input SalesInput {
        ${salesAttribs}
    }
    type Mutation {
        createProduct(input: ProductInput) : Product
        createSales(input: [SalesInput]) : Sales
    }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers})
