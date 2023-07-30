import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = () => {
	const [product, setProduct] = useState({});

	// get the ID from the URL
	// 'useParams()' is a custom hook provided by the 'react-router-dom' library. It allows accessing the parameters defined in the URL of the current route.
	// '{ id: productId }' is object desctructuring syntax to extract a property called 'id' from the object returned by 'useParams'. The extracted value is then assigned to a variable named 'productId'.
	//  This code extracts the value of the parameter named 'id' from the current URL and assigning it to the variable 'productId'
	const { id: productId } = useParams();

	// fetch the data of product in the array
	// const product = products.find((p) => p._id === productId);
	
	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/products/${productId}`);
			setProduct(data);
		}

		fetchProduct();
	}, [productId]);

	return (
		<>
		<Link className='btn btn-light my-3' to='/'>Go Back</Link>
		<Row>
			<Col md={5}>
				<Image src={product.image} alt={product.name} fluid />
			</Col>
			<Col md={4}>
				{/* ListGroup -> is a component used to display a list of items in a vertical layout, similar to an HTML '<ul>' element */}
				<ListGroup variant='flush'>
					{/* ListGroupItem -> is a component used to represent individual items within the 'ListGroup'. It acts similary to a list item '<li>' in an HTML list. Each 'ListGroupItem' can contain text, images, buttons, or any other content you might need */}
					<ListGroup.Item>
						<h3>{product.name}</h3>
					</ListGroup.Item>
					<ListGroup.Item>
						<Rating value={product.rating} text={`${product.numReviews} reviews`} />
					</ListGroup.Item>
					<ListGroup.Item>
						Price: ${product.price}
					</ListGroup.Item>
					<ListGroup.Item>
						Description: {product.description}
					</ListGroup.Item>
				</ListGroup>
			</Col>
			<Col md={3}>
				<Card>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<Row>
								<Col>Price:</Col>
								<Col>
									<strong>${product.price}</strong>
								</Col>
							</Row>
						</ListGroup.Item>
						<ListGroup.Item>
							<Row>
								<Col>Status:</Col>
								<Col>
									<strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
								</Col>
							</Row>
						</ListGroup.Item>

						<ListGroup.Item>
							<Button className='btn-block' type='button' disabled={product.countInStock === 0}>
								Add to Cart
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
		</>
	)
}
export default ProductScreen;
