"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl, Dropdown, Modal, Form } from 'react-bootstrap';
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.min.css";

const UserList = () => {
  // State hooks
  const [sortOrder, setSortOrder] = useState('Más antiguo primero');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showDeactivationModal, setShowDeactivationModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Dummy data for the list of users
  const users = new Array(10).fill(null).map((_, index) => ({
    id: index + 1,
    title: 'Título',
    fullName: 'Nombre completo ' + (index + 1)
  }));

  // Handlers
  const handleSort = (sortType) => {
    setSortOrder(sortType);
    // Implement sorting logic
  };

  const handleDeactivation = (user) => {
    setSelectedUser(user);
    setShowDeactivationModal(true);
  };

  const confirmDeactivation = () => {
    console.log(`Deactivating user ID: ${selectedUser.id}`);
    // Implement the deactivation logic here
    setShowDeactivationModal(false);
  };

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);

  return (
    <>
      <Head>
        <title>Listado de Usuarios</title>
      </Head>
      <Container>
        {/* List Header */}
        <Row className="my-4">
          <Col>
            <h1>Listado de usuarios:</h1>
          </Col>
        </Row>

        {/* Search Bar and Add User Button */}
        <Row className="mb-2">
          <Col lg={6}>
            <InputGroup>
              <FormControl placeholder="Buscar usuarios" />
            </InputGroup>
          </Col>
          <Col lg={6} className="d-flex justify-content-lg-end">
            <Button variant="primary">Dar de alta nuevo usuario</Button>
          </Col>
        </Row>

        {/* Filter and Sort Buttons */}
        <Row className="mb-4">
          <Col lg={6}>
            <Button variant="outline-secondary" onClick={toggleFilterModal} className="me-2">
              Filtros
            </Button>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary">
                Ordenar por: {sortOrder}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSort('Orden alfabético')}>Orden alfabético</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort('Más reciente primero')}>Más reciente primero</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort('Más antiguo primero')}>Más antiguo primero</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

          {/* Filter Modal */}
          <Modal show={showFilterModal} onHide={toggleFilterModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Filtrar por:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Tipo de perfil</Form.Label>
                <Form.Control type="text" placeholder="Escribe aquí" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Titulación</Form.Label>
                <Form.Control type="text" placeholder="Escribe aquí" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Curso académico</Form.Label>
                <Form.Control type="text" placeholder="Escribe aquí" />
              </Form.Group>
              <Button variant="primary" onClick={toggleFilterModal}>
                Actualizar resultados
              </Button>
            </Form>
          </Modal.Body>
        </Modal>


        {/* Deactivation Confirmation Modal */}
        <Modal show={showDeactivationModal} onHide={() => setShowDeactivationModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Estás a punto de dar de baja a {selectedUser?.fullName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>¿Estás seguro?</p>
            <div className="text-right">
              <Button variant="secondary" onClick={() => setShowDeactivationModal(false)} className="me-2">
                No, cancelar
              </Button>
              <Button variant="danger" onClick={confirmDeactivation}>
                Sí, dar de baja
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        {/* Users List */}
        <Row>
          <Col>
            {users.map((user) => (
              <Row key={user.id} className="py-2" style={{ borderBottom: '1px solid #ddd' }}>
                <Col lg={8}>
                  <div>{user.title}</div>
                  <div>{user.fullName}</div>
                </Col>
                <Col lg={4} className="d-flex justify-content-end">
                  <Button variant="outline-danger" onClick={() => handleDeactivation(user)}>
                    Dar de baja
                  </Button>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserList;
