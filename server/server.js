const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth'); 
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware,
    });
    await server.start();
    server.applyMiddleware({ app });
    console.log(`Use graphql at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

// for (the equivlant) of GET and POST requests: middleware for express server to recognize req objects as strings or arrays
app.use(express.urlencoded({ extended: false }));
// for (the equivalent of) GET and POST requests: middleware for express server to recognize incoming req objects as JSON objects
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })
})
