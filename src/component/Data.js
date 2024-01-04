import React, {useState, useEffect} from 'react'
import {Card, Table, Container, Navbar, Nav, Button, Stack, Form, InputGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import SearchComponent from './FilterData';
import axios from 'axios';
import { toast } from 'react-toastify';
import PaginationComponent from './Pagination';


const Data = () => {

const [users, setUser] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(2);
const [filteredData, setFilteredData] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get("http://192.168.209.129:8003/servis/students",  {
        headers: {
          'Authorization': 'Bearer 101-token',
          'Access-Control-Allow-Origin': '*',
        },
      });
      setUser(response.data.students);
      setFilteredData(response.data.students);
      console.log(response.data.students);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser = async (id) => {
    try {
      await axios.post(`http://192.168.209.129:8003/servis/delete-student`, {
        id: id,
      },
      {
        headers: {
          'Authorization': 'Bearer 101-token',
        },
        body: {
          'id': {id}
        }
      });
      getUser();
      toast.success('Delete success!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = term => {
  
    setSearchTerm(term);
    if (term.trim() === "") {
        setFilteredData(users);
      } else {
        if (Array.isArray(users)) {
          const filtered = users.filter(
            user =>
              user.nama.toLowerCase().includes(term.toLowerCase()) ||
              user.nik.toLowerCase().includes(term.toLowerCase())
          );
          setFilteredData(filtered);
        } else {
          console.error("'users' bukan array");
        }
      }
    
      setCurrentPage(1);
    };

  

  const lastPage = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
  const currentItems = Array.isArray(filteredData)
  ? filteredData.slice(indexOfFirstItem, indexOfLastItem)
  : []; 

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };


  const indexItem = (currentPage - 1) * itemsPerPage;

  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <Container>
            <Navbar.Brand href="#"><img src="logo192.png" alt="..." /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/data">Data</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Card className="parallax-card">
        <Card.Img className="parallax-image" variant="top" src="img/image-1-data.jpg" />
        <Card.Body>
          <Card.Text>
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Data</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quo.</p>
                    </div>
                </div>
            </div>
                <div className="container">
                <Stack direction="horizontal" gap={2}>
                  <div className="p-2"> <Button as={Link} to={'/addData'} variant="primary" size="sm" className='mb-2'>Add data</Button>{' '}</div>
                  <div className="p-2 ms-auto"> 
                    <SearchComponent onSearch={handleSearch} />
                  </div>
                </Stack>
                <Table striped="columns">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>NIK</th>
                        <th>Alamat</th>
                        <th>Telepon</th>
                        <th>Tgl Lahir</th>
                        <th>Semester Masuk</th>
                        <th>Tahun masuk</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((user, index) => (
                    <tr key={user.id}>
                        <td>{indexItem + index + 1}</td>
                        <td>{user.nama}</td>
                        <td>{user.nik}</td>
                        <td>{user.alamat}</td>
                        <td>{user.telepon}</td>
                        <td>{user.tanggal_lahir}</td>
                        <td>{user.semester_masuk}</td>
                        <td>{user.tahun_masuk}</td>
                        <td>
                            <Button as={Link} to={`/edit/${indexItem + index + 1}`} variant="success" size="sm">edit</Button>{' '}
                            <Button variant="danger" size="sm" onClick={() => deleteUser(user.id)}>
                                delete
                            </Button>{' '}
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
                </Table>
                <PaginationComponent
                  currentPage={currentPage}
                  totalPages={lastPage}
                  onPageChange={onPageChange}
                />
                </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Data
