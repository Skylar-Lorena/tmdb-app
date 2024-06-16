import React, { useState } from 'react';
import { Navbar, Nav, Container, FormControl, Button } from 'react-bootstrap';

const KenyaFlixxNavbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm); // Call passed search function with search term
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Kenya Flixx</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="/movies">Home</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 d-flex"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleSearch}>
            Search
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default KenyaFlixxNavbar;
