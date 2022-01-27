import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apolloClient";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
      <ApolloProvider client={client}>
        <AuthProvider>
          <Component {...pageProps}/>
        </AuthProvider>
      </ApolloProvider>
    );
}
