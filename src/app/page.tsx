import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Anime from "./anime/page";
import Hobbies from "./components/Hobbies";

const page = () => {
  const client = new ApolloClient({
    uri: "https://graphql.anilist.co",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <Anime />
      </ApolloProvider>
    </>
  );
};

export default page;
