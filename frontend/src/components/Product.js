import { Card } from 'react-bootstrap';
// import Link from 'react-router-dom' library to have no refresh in the page
import { Link } from 'react-router-dom';
// import 'Rating.js' component 
import Rating from './Rating';

// Receive the 'product' prop
// The 'Product' componend does not modify the 'product' prop; it only uses it to display the relevant information
const Product = ({ product }) => {

	return (

		// using the 'product' prop, render the details of the specific products such as image, name, and price
		
		<Card className="my-3 p-3 rounded">
			{/*since we're using JSX syntax, replace the '<a>' tag to '<Link>' and 'href' to 'to'*/}
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant="top" />
			</Link>

			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as="div" className="product-title">
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				{/*From the 'Rating.js' component*/}
				{/* 'Product.js' component renders a product card with details in 'Rating.js' component that displays star ratings based on the provided 'value' prop and number of review from 'text' prop*/}
				<Card.Text as="div" >
					<Rating value={ product.rating } text={`${product.numReviews} reviews`} />
				</Card.Text>

				<Card.Text as="h3">
					₱{product.price}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}
export default Product