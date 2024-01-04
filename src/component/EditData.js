import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Card, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Link, useParams, useNavigate} from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditData = () => {

    const [nama, setNama] = useState("");
    const [id_student, setId] = useState("");
    const [nik, setNik] = useState("");
    const [alamat, setAlamat] = useState("");
    const [telepon, setTelepon] = useState("");
    const [tanggal_lahir, setTanggal] = useState("");
    const [tahun_masuk, setTahun] = useState("");
    const [semester_masuk, setSemester] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUsersById();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://192.168.209.129:8003/servis/edit-student`, {
                id: id_student,
                nama: nama,
                nik: nik,
                alamat: alamat,
                telepon: telepon,
                tanggal_lahir: tanggal_lahir,
                tahun_masuk: tahun_masuk,
                semester_masuk: semester_masuk
            },{
                headers: {
                    'Authorization': 'Bearer 101-token',
                    'Access-Control-Allow-Origin': 'http://localhost:8080',
                },
              },
            toast.success('Data updated!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            );
            navigate('/data');
            console.log(id_student);
        } catch (error) {
            console.log(error);
        }
    }

    const getUsersById = async () => {
        try {
            const response = await axios.get(`http://192.168.209.129:8003/servis/students?first=${id}&rows=1`, {
                headers: {
                    'Authorization': 'Bearer 101-token',
                    'Access-Control-Allow-Origin': 'http://localhost:8080',
                },
            });
            const studentData = response.data.students[0];
            setId(studentData.id);
            setNama(studentData.nama);
            setNik(studentData.nik);
            setAlamat(studentData.alamat);
            setTelepon(studentData.telepon);
            setTanggal(studentData.tanggal_lahir);
            setTahun(studentData.tahun_masuk);
            setSemester(studentData.semester_masuk);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }


  return (
    <div>
        <Card>
        <Card.Body>
          <Card.Text>
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header text-center pb-5">
                        <h2>Update Data</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quo.</p>
                    </div>
                </div>
            </div>
            <Form className="container" onSubmit={updateUser}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" value={nama} onChange={ (e) => setNama(e.target.value) } />
                <Form.Control type="hidden" value={id_student} onChange={ (e) => setId(e.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="hidden" value={id_student} onChange={ (e) => setId(e.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>NIK</Form.Label>
                <Form.Control type="text" value={nik} onChange={ (e) => setNik(e.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" value={alamat} onChange={ (e) => setAlamat(e.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Telepon</Form.Label>
                <Form.Control type="text" value={telepon} onChange={ (e) => setTelepon(e.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tanggal lahir</Form.Label>
                <Form.Control type="date" value={tanggal_lahir} onChange={ (e) => setTanggal(e.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tahun Masuk</Form.Label>
                <Form.Control type="text" value={tahun_masuk} onChange={ (e) => setTahun(e.target.value) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Semester Masuk</Form.Label>
                <Form.Control type="text" value={semester_masuk} onChange={ (e) => setSemester(e.target.value) } />
            </Form.Group>
                <Button as="input" type="submit" value="Submit" />{' '}
                <Button as={Link} to={'/data'} variant='success'>Kembali</Button>{' '}
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default EditData
