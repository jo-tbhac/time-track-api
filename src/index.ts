import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'

import { resolvers } from '@/resolvers'

const typeDefs = await readFile(path.resolve(import.meta.dirname, 'schema.graphql'), 'utf8')

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()

await server.start()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
