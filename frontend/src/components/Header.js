import { Navbar, Nav, Container } from 'react-bootstrap';
//from react-icons
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png'

const Header = () => {

	return (

		<header>
			<Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
				<Container>
					{/*added 'LinkContainer' for no refresh and replaced the 'href' to 'to' since we're using JSX syntax*/}
					<LinkContainer to="/">
						{/*Navbar.Brand is a component used to represent the brand or logo of a navigation bar. It is commonly used in navigation components or header sections.*/}
						<Navbar.Brand>
							{/*<img src={logo} alt="IterShop"/>*/}
							IterShop

						</Navbar.Brand>
					</LinkContainer>
					{/*Menu Icon*/}
					{/*aria-controls for accessibility and behavior  for many common UI components*/}
					{/*toggle is the controlling element*/}
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					{/*the content under collapse is the content to be controlled*/}
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/cart">
								<Nav.Link><FaShoppingCart />Cart</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link><FaUser />Sign In</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>

			</Navbar>
		</header>
	)
}

export default Header;