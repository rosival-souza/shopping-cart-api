const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const productsAttribs = `
    id: Int!
    photo: String!
    title: String!
    price: Float!
    reference: String!
    amount: Int!
    available: Int!
`
const typeDefs = `
    type Product {
        ${productsAttribs}
    }

    type Query {
        getProduct(id: ID!): Product
        getProducts: [Product]

    }

    input ProductInput {
        ${productsAttribs}
    }

    type Mutation {
        createProduct(input: ProductInput) : Product
    }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers})
