const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/api/schema')
const cors = require('cors')
const app = express()
app.use(cors())

app.use('/api', graphqlHTTP({
    
    schema: schema,
    graphiql:true
}))

app.listen(4000, () => console.log('Running a GraphQL API server at http://localhost:4000/api'))