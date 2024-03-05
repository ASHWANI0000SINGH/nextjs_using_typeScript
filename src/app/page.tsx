import client from "@/lib/client";
import { ApolloProvider } from "@apollo/client";
import Anime from "./components/Anime";

const Page = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Anime />
      </ApolloProvider>
    </>
  );
};

export default Page;
