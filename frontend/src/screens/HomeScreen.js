import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};

		fetchProducts();
	}, []);

	return (

		<>
			<h1>Latest Products</h1>
			<Row>
				{/*loop through the list of products (products object) using .map() method*/}
				{products.map((product) => (
					// for screen responsiveness
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>

						{/*Render the 'Product' component for each item in Product.js component*/}
						<Product product={product} />
					</Col>
				)) }
			</Row>
		</>
	)
}
export default HomeScreen