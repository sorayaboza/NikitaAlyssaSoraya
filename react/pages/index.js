import Head from 'next/head'
import Link from "next/link"
import Layout from "./layout/layout.js"
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; //npm install react-bootstrap

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const handleModalOpen = (content) => {
    setModalContent(content);
    setShowModal(true);
  };
  
  return (
    <Layout home>
      <Head>
        <title>Welcome Page - Sign-In Page</title>
      </Head>

      <div className="account-items">
        <Link href="">
          <h1 id="account-btn" onClick={() => handleModalOpen('REGISTER')}>REGISTER</h1>
        </Link>
        <Link href="">
          <h1 id="account-btn" onClick={() => handleModalOpen('LOGIN')}>LOGIN</h1>
        </Link>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} style={{ marginTop: '7vw' }} className='Login-Register-Modal'>
        <Modal.Header>
          <Modal.Title>{modalContent}</Modal.Title>
          <button
            type="button"
            className="login/register-cancel"
            onClick={() => setShowModal(false)}>
            Close 
          </button>
        </Modal.Header>
        <Modal.Body>
          {modalContent === 'REGISTER' ? (
            <Form>
              <Form.Group controlId="registerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">Register</Button>
            </Form>
          ) : (
            <Form>
              <Form.Group controlId="loginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">Login</Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Layout>
  )
}

/* 
CREDIT: 

Next.js set-up: https://youtube.com/playlist?list=PLynWqC6VC9KOvExUuzhTFsWaxnpP_97BD

*/