import { useQuery } from "@apollo/client";
import { getProductsQuery } from "./queries/queries";
import ProductDetails from "./ProductDetails";
import { useState } from "react";

const ProductList = () => {
  const [details, setDetails] = useState("");
  const { loading, data, error } = useQuery(getProductsQuery);
  if (loading) return <p>Loading..</p>;
  if (error) return <p>error</p>;

  return (
    <div className="product-list">
      {data.products.map((product) => {
        return (
          <div>
            <img
              onClick={() => setDetails(product.id)}
              className="product-img"
              src={product.image}
              alt={product.name}
              width="200"
              height="200"
            />
            <p key={product.id}>{product.name}</p>
          </div>
        );
      })}
      {details ? (
        <ProductDetails productId={details} />
      ) : (
        <div>Not selected</div>
      )}
    </div>
  );
};

export default ProductList;

// const BookDetails = ({ bookId }) => {
// 	const { loading, data } = useQuery(getBookQuery, {
// 		variables: { id: bookId }
// 	});
// 	let display;
// 	if (loading) {
// 		display = <div>loading</div>;
// 	} else {
//         const { book } = data;
// 		display = (
// 			<div>
// 				<h2>{book.name}</h2>
// 				<p>{book.genre}</p>
// 				<p>{book.author.name}</p>
// 				<p>All books by this author:</p>
// 				<ul className="other-books">
// 					{book.author.books.map((item) => {
// 						return <li key={item.id}>{item.name}</li>;
// 					})}
// 				</ul>
// 			</div>
// 		);
// 	}

// 	return <div id="book-details">{display}</div>;
// };

// export default BookDetails;
