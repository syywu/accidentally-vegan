import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

// root components- first thing to render
function App() {
  const client = new ApolloClient({
    uri: "https://http://localhost:8000/graphql/",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      // the div that's been injected to html
      <div className="App">
        {/* inject navbar into root route */}
        <Navbar />
        <ProductList />
        <div className="content">
          <h1>Accidentally Vegan</h1>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
