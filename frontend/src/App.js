import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AddProduct from "./components/AddProduct";

// root components- first thing to render
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql/",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* inject navbar into root route */}
        <Navbar />
        <ProductList />
        <AddProduct />
      </div>
    </ApolloProvider>
  );
}

export default App;
