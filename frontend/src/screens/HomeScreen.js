import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {

	return (

		<>
			<h1>Latest Products</h1>
			<Row>
				{/*loop through the list of products (products object) using .map() method*/}
				{products.map((product) => (
					// for screen responsiveness
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>

						{/*Render the 'Product' component for each item*/}
						<Product product={product} />
					</Col>
				)) }
			</Row>
		</>
	)
}
export default HomeScreen