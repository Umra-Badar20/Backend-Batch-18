import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import axios from 'axios';
async function startServer(){

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    const server = new ApolloServer({
        typeDefs: `
        type Products{
        _id: String!
        name: String!
        desc: String!
        image: String!
        }
        type Todo {
            id: ID!
            title: String!
            completed: Boolean!
        }
        type Query{
            getTodos: [Todo]
            getProducts: [Products]
        }    
        `,
        resolvers: {
            Query:{
                getTodos: async() => {
                    const response= await axios.get('https://jsonplaceholder.typicode.com/todos');
                    return response.data;
                },
                getProducts: async() => {
                    const response= await axios.get('https://e-commerce-ppfl.vercel.app/');
                    return response.data.products;
                }
            }
        }
    });      
    await server.start();

    app.use('/graphql', expressMiddleware(server));

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000/graphql');
    });
}

startServer();