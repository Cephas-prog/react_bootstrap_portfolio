/** @format */

import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Head = () => {
	return (
		<Navbar bg='dark' expand='lg'>
			<Container fluid>
				<Navbar.Brand href='#'>Cephas Gondwe </Navbar.Brand>

				<Nav
					className='ml-auto my-2 my-lg-0'
					style={{ maxHeight: '100px' }}					
				>
					<Nav.Link href='#action1'>Home</Nav.Link>
					<Nav.Link href='#action2'>Link</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Head;
