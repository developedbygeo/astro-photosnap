import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { WP_CONTENT_ENDPOINT } from "astro:env/server";

const client = new ApolloClient({
  uri: `${WP_CONTENT_ENDPOINT}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
