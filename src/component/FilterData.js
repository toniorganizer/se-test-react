import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSearchSubmit}>
        <InputGroup className="mb-3" size="sm">
            <Form.Control
                placeholder="Cari data"
                value={searchTerm}
                onChange={handleSearchChange}
                aria-describedby="basic-addon2"
            />
            <Button type='submit' variant="outline-primary" id="button-addon2">
                Cari
            </Button>
        </InputGroup>
    </Form>
  );
};

export default SearchComponent;
