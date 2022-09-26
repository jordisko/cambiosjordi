/* eslint-disable array-callback-return */

import Navbar from "react-bootstrap/Navbar";
import LogoutButton from "./logout";
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../fotos/Redondosinfondo.png';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Categories } from './Categories';
import  modificarPerfil  from './yahasiniciado'

// font family "Poppins", sans-serif;

function NavUsuarioNo(props) {

  let Button_Categorie_Search_active = 0;

  const { user } = useAuth0();

  const [show, setShow] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const styleButtonProfileImg = {
    backgroundColor: isHover ? "rgb(255, 255, 255, 0.5)" : "none",
    backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/6/65/Kruse_CNDLS_Profile.png')",
    borderRadius: "50%",
    border: "solid 2px gray",
    width: "100px",
    height: "100px",
    backgroundRepeat: "no repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    boxShadow: '6px 2px 9px gray',
    opacity: isHover ? "0.5" : "1",
    transition: "all 0.2s",
  };

  const Buttons_Categorie = {
    paddingTop: "25%"
  }

  const styleTextProfileImg = {
    color: "black",
    margin: "4%",
    display: isHover ? "block" : "none",
    position: "center",
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  function select_Categorie_Pet(id) {
    let button = document.getElementById("Button_Categ_Search_Pet" + id);
    if (button.style.backgroundColor === "rgb(161, 84, 33)" & Button_Categorie_Search_active == 0) {
      button.style.backgroundColor = "rgb(255, 102, 0)";
      Button_Categorie_Search_active++;
    } else if (button.style.backgroundColor === "rgb(255, 102, 0)") {
      button.style.backgroundColor = "rgb(161, 84, 33)";
      Button_Categorie_Search_active--;
    }

    return false;

  }

  function select_Categorie_Person(id) {
    let button = document.getElementById("Button_Categ_Search_Person" + id);
    if (button.style.backgroundColor == "rgb(161, 84, 33)") {
      button.style.backgroundColor = "rgb(255, 102, 0)";

    } else {
      button.style.backgroundColor = "rgb(161, 84, 33)";

    }

    return false;
  }

  function Modal_Show() {
    user.type = "person";
    if (user.type === "person") {
      return (
        <Modal className="modal" size="lg" show={show} onHide={handleClose}>
          <Modal.Header className="modal_header" closeButton>
            <Modal.Title className="modal_text">Ajustes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3 form_group text-center" controlId="exampleForm.ControlInput">
                <Row>
                  <Col xl={12}>
                    <Button data-prefix="1" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styleButtonProfileImg}>
                      <p style={styleTextProfileImg}>Cambiar Foto</p>
                      <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{ display: 'none' }} />
                    </Button>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3 form_group" controlId="exampleForm.ControlInput1">
                <Row>
                  <Col xl={4}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      id= "nombre"
                      className="form_control"
                      type="name"
                      value={user.name}
                      autoFocus
                    />
                  </Col>

                  <Col xl={4}>
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                    id= "apellido"
                      className="form_control"
                      type="subname"
                      value={user.subname}
                      autoFocus
                    />
                  </Col>
                  <Col xl={4}>
                    <Form.Label>Edad</Form.Label>
                    <Form.Control
                  
                      className="form_control"
                      type="age"
                      value={user.age}
                      autoFocus
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Row>
                  <Col xl={6}>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                    id= "correoElectronico"
                      className="form_control"
                      type="email"
                      value={user.email}
                      autoFocus
                    />
                  </Col>
                  <Col xl={2}>
                    <Form.Label>Tipo usuario</Form.Label>
                    <Form.Control
                    id= "tipoUsuario"
                      className="form_control"
                      type="typeUser"
                      value={user.typeUser}
                      autoFocus
                      disabled
                    />
                  </Col>
                  <Col xl={4}>
                    <Form.Label>Número teléfono</Form.Label>
                    <Form.Control
                    id= "numeroTelefono"
                      className="form_control"
                      type="phone"
                      value={user.phone}
                      autoFocus
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Row>
                  <Col xl={4}>
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control
                    id= "direccion"
                      className="form_control"
                      type="phone"
                      value={user.address}
                      autoFocus
                    />
                  </Col>
                  <Col xl={2}>
                    <Form.Label>Codigo Postal</Form.Label>
                    <Form.Control
                    id= "codigoPostal"
                      className="form_control"
                      type="phone"
                      value={user.pcode}
                      autoFocus
                    />
                  </Col>
                  <Col xl={6}>
                    <Form.Label>Fecha nacimiento</Form.Label>
                    <Form.Control
                      id= "fechaNacimiento"
                      className="form_control"
                      type="date"
                      value={user.date}
                      autoFocus
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Row>
                  <Col xl={12}>
                    <Form.Label>Personalidad de la mascota ideal</Form.Label>
                    <p></p>
                    {Categories.map((categories) => {
                      if (categories.type === "pet" & categories.select === "no") {
                        return (
                          <Button style={{
                            backgroundColor: "rgb(161, 84, 33)",
                            color: "white",
                            borderRadius: "10%",
                            border: "none",
                            margin: "1%",
                            fontSize: "10px",
                            padding: "2px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            backgroundSize: "cover",
                            tex: "center"
                          }}
                            onClick={() => select_Categorie_Pet(categories.id)}
                            id={"Button_Categ_Search_Pet" + categories.id}>
                            <p style={Buttons_Categorie}>{categories.name}</p>
                          </Button>
                        );
                      }
                      if (categories.type === "pet" & categories.select === "yes") {
                        Button_Categorie_Search_active++;
                        return (
                          <Button style={{
                            backgroundColor: "rgb(255, 102, 0)",
                            color: "white",
                            borderRadius: "10%",
                            border: "none",
                            margin: "1%",
                            fontSize: "10px",
                            padding: "2px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            backgroundSize: "cover",
                            tex: "center"
                          }}
                            onClick={() => select_Categorie_Pet(categories.id)}
                            id={"Button_Categ_Search_Pet" + categories.id}>
                            <p style={Buttons_Categorie}>{categories.name}</p>
                          </Button>
                        );
                      }
                    })}

                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Row>
                  <Col xl={12}>
                    <Form.Label>Como te defines</Form.Label>
                    <p></p>
                    {Categories.map((categories) => {
                      if (categories.type === "person" & categories.select === "no") {
                        return (
                          <Button style={{
                            backgroundColor: "rgb(161, 84, 33)",
                            color: "white",
                            borderRadius: "10%",
                            border: "none",
                            margin: "1%",
                            fontSize: "10px",
                            padding: "2px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            backgroundSize: "cover",
                            tex: "center"
                          }}
                            onClick={() => select_Categorie_Person(categories.id)}
                            id={"Button_Categ_Search_Person" + categories.id}>
                            <p style={Buttons_Categorie}>{categories.name}</p>
                          </Button>
                        );
                      }
                      if (categories.type === "person" & categories.select === "yes") {
                        return (
                          <Button style={{
                            backgroundColor: "rgb(255, 102, 0)",
                            color: "white",
                            borderRadius: "10%",
                            border: "none",
                            margin: "1%",
                            fontSize: "10px",
                            padding: "2px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            backgroundSize: "cover",
                            tex: "center"
                          }}
                            onClick={() => select_Categorie_Person(categories.id)}
                            id={"Button_Categ_Search_Person" + categories.id}>
                            <p style={Buttons_Categorie}>{categories.name}</p>
                          </Button>
                        );
                      }
                    })}
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                <Row>
                  <Col xl={12}>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                    id= "descripcion"
                      as="textarea" rows={3}
                      value={user.description}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="button_close" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="button_save" variant="primary" onClick={modificarPerfil()}{handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>);
    }
    if (user.type === "pet") {
      return (
        <Modal className="modal" size="lg" show={show} onHide={handleClose}>
          <Modal.Header className="modal_header" closeButton>
            <Modal.Title className="modal_text">Ajustes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3 form_group text-center" controlId="exampleForm.ControlInput">
                <Row>
                  <Col xl={12}>
                    <Button data-prefix="1" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styleButtonProfileImg}>
                      <p style={styleTextProfileImg}>Cambiar Foto</p>
                      <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{ display: 'none' }} />
                    </Button>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3 form_group" controlId="exampleForm.ControlInput1">
                <Row>
                  <Col xl={4}>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      className="form_control"
                      type="name"
                      value={user.name}
                      autoFocus
                    />
                  </Col>
                  <Col xl={4}>
                    <Form.Label>Edad</Form.Label>
                    <Form.Control
                      className="form_control"
                      type="age"
                      value={user.age}
                      autoFocus
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Row>
                  <Col xl={6}>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      className="form_control"
                      type="email"
                      value={user.email}
                      autoFocus
                    />
                  </Col>
                  <Col xl={2}>
                    <Form.Label>Tipo usuario</Form.Label>
                    <Form.Control
                      className="form_control"
                      type="typeUser"
                      value={user.typeUser}
                      autoFocus
                      disabled
                    />
                  </Col>
                  <Col xl={4}>
                    <Form.Label>Número teléfono</Form.Label>
                    <Form.Control
                      className="form_control"
                      type="phone"
                      value={user.phone}
                      autoFocus
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Row>
                  <Col xl={4}>
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control
                      className="form_control"
                      type="phone"
                      value={user.address}
                      autoFocus
                    />
                  </Col>
                  <Col xl={2}>
                    <Form.Label>Codigo Postal</Form.Label>
                    <Form.Control
                      className="form_control"
                      type="phone"
                      value={user.pcode}
                      autoFocus
                    />
                  </Col>
                  <Col xl={6}>
                    <Form.Label>Fecha nacimiento</Form.Label>
                    <Form.Control
                      className="form_control"
                      type="date"
                      value={user.date}
                      autoFocus
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Row>
                  <Col xl={12}>
                    <Form.Label>Personalidad del dueño/a ideal</Form.Label>
                    <p></p>
                    {Categories.map((categories) => {
                      if (categories.type === "person" & categories.select === "no") {
                        return (
                          <Button style={{
                            backgroundColor: "rgb(161, 84, 33)",
                            color: "white",
                            borderRadius: "10%",
                            border: "none",
                            margin: "1%",
                            fontSize: "10px",
                            padding: "2px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            backgroundSize: "cover",
                            tex: "center"
                          }}
                            onClick={() => select_Categorie_Pet(categories.id)}
                            id={"Button_Categ_Search_Pet" + categories.id}>
                            <p style={Buttons_Categorie}>{categories.name}</p>
                          </Button>
                        );
                      }
                      if (categories.type === "person" & categories.select === "yes") {
                        Button_Categorie_Search_active++;
                        return (
                          <Button style={{
                            backgroundColor: "rgb(255, 102, 0)",
                            color: "white",
                            borderRadius: "10%",
                            border: "none",
                            margin: "1%",
                            fontSize: "10px",
                            padding: "2px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            backgroundSize: "cover",
                            tex: "center"
                          }}
                            onClick={() => select_Categorie_Pet(categories.id)}
                            id={"Button_Categ_Search_Pet" + categories.id}>
                            <p style={Buttons_Categorie}>{categories.name}</p>
                          </Button>
                        );
                      }
                    })}

                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Row>
                  <Col xl={12}>
                    <Form.Label>Como te defines</Form.Label>
                    <p></p>
                    {Categories.map((categories) => {
                      if (categories.type === "pet" & categories.select === "no") {
                        return (
                          <Button style={{
                            backgroundColor: "rgb(161, 84, 33)",
                            color: "white",
                            borderRadius: "10%",
                            border: "none",
                            margin: "1%",
                            fontSize: "10px",
                            padding: "2px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            backgroundSize: "cover",
                            tex: "center"
                          }}
                            onClick={() => select_Categorie_Person(categories.id)}
                            id={"Button_Categ_Search_Person" + categories.id}>
                            <p style={Buttons_Categorie}>{categories.name}</p>
                          </Button>
                        );
                      }
                      if (categories.type === "pet" & categories.select === "yes") {
                        return (
                          <Button style={{
                            backgroundColor: "rgb(255, 102, 0)",
                            color: "white",
                            borderRadius: "10%",
                            border: "none",
                            margin: "1%",
                            fontSize: "10px",
                            padding: "2px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            backgroundSize: "cover",
                            tex: "center"
                          }}
                            onClick={() => select_Categorie_Person(categories.id)}
                            id={"Button_Categ_Search_Person" + categories.id}>
                            <p style={Buttons_Categorie}>{categories.name}</p>
                          </Button>
                        );
                      }
                    })}
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                <Row>
                  <Col xl={12}>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                      as="textarea" rows={3}
                      value={user.description}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="button_close" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="button_save" variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>);
    }
  }


  return (

    <Navbar className="navdeco" sticky="top">

      <img src={logo} alt="logo" width="100px" className="logonav" />
      <Navbar.Brand href="#home" className="bienvenido">LUCKY</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="bienvenido">
          <Button variant="primary" onClick={handleShow}>
            BIENVENIDO:  {user.name}   FOTO
          </Button>


        </Navbar.Text>

        {Modal_Show()}

        <LogoutButton />

      </Navbar.Collapse>

    </Navbar>




  );
};


export default NavUsuarioNo;
