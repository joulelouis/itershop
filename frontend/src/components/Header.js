import { Navbar, Nav, Container } from 'react-bootstrap';
//from react-icons
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png'

const Header = () => {

	return (

		<header>
			<Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
				<Container>
					{/*Navbar.Brand is a component used to represent the brand or logo of a navigation bar. It is commonly used in navigation components or header sections.*/}
					<Navbar.Brand href="/">
						{/*<img src={logo} alt="IterShop"/>*/}
						IterShop

					</Navbar.Brand>

					{/*Menu Icon*/}
					{/*aria-controls for accessibility and behavior  for many common UI components*/}
					{/*toggle is the controlling element*/}
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					{/*the content under collapse is the content to be controlled*/}
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/cart"><FaShoppingCart />Cart</Nav.Link>
							<Nav.Link href="/login"><FaUser />Sign In</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>

			</Navbar>
		</header>
	)
}

export default Header;