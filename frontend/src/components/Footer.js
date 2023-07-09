import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

	// initializes 'currentYear'
	// 'new Date()': this creates a new instance of the 'Date' object, which represents the current date and time
	// 'getFullYear()': this is a method of the 'Date' object that retrieves the current year as a four-digit number.
	const currentYear = new Date().getFullYear()

	return (

		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						{/*'&copy;' is an HTML entity representing the copyright symbol.*/}
						<p>IterShop &copy; {currentYear}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
export default Footer;