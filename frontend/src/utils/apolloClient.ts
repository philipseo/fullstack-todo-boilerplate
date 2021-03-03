import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';

const graphqlLink = () => (
  createHttpLink({
    uri: process.env.GRAPHQL_ENDPOINT,
    credentials: 'same-origin',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  })
);

export default new ApolloClient({
  link: ApolloLink.from([graphqlLink()]),
  cache: new InMemoryCache(),
});
